import Api from './Api';
import * as db from './Db';

db.connect({
  mongoDb: {
    uri: 'mongodb://localhost/haulin',
  },
})
.then(() => {
  const api = new Api({ port: 3000 });
  api.start();
});
