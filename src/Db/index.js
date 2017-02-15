import Promise from 'bluebird';
import mongoose, { Schema } from 'mongoose';

mongoose.Promise = Promise;

function connect(config) {
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

  return mongoose.connect(config.mongoDb.uri)
    .then(() => {
      console.log(`connected successfully to ${config.mongoDb.uri}`);
    })
    .catch((error) => {
      console.log(`Mongoose default connection error: ${error}`);
      process.exit(1);
    });
}

export { mongoose, Schema, connect };
