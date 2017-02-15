import * as http from 'http';
import _ from 'lodash';
import express from 'express';
import bodyParser from 'body-parser';
import { handler as errorHandler } from 'yaeeh';
import responses from './responses';

export default class Api {
  constructor(config) {
    this.config = config;
    this.app = express();
    this.server = http.createServer(this.app);
    this.registerMiddleware();
  }

  registerMiddleware() {
    this.app.use(bodyParser);
    this.app.use(responses);
  }

  registerErrorHandler() {
    this.app.user(errorHandler);
  }

  registerRoutes(routes) {
    _.each(routes, (routeHandler) => {
      routeHandler.register(this.app);
    });

    this.registerErrorHandler();
  }

  start() {
    this.server.listen(this.config.port);
    this.server.on('error', (error) => {
      if (error.syscall !== 'listen') throw error;
      const bind = (typeof this.config.port === 'string') ?
        `Pipe ${this.config.port}` :
        `Port ${this.config.port.toString()}`;

      switch (error.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
    this.server.on('listening', () => {
      const addr = this.server.address();
      const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
      console.log(`Listening on ${bind}`);
    });
  }
}
