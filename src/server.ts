import {app} from './app';
import {logger} from './util';
import {MongoProvider} from './providers';

MongoProvider.init().then(() => console.log('connected mongoose'));

const server = app.listen(app.get('port'), () => {
  logger.info(
    'APP_START',
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode`
  );
});

process.on('unhandledRejection', reason => {
  logger.error('UNHANDLED_REJECTION', reason);
});

process.on('uncaughtException', error => {
  logger.error('UNHANDLED_REJECTION', error);
});

export default server;
