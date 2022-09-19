import { Express } from 'express';
import { post, remove, broadcast } from './controllers/subscriptionController';

const initializeRoutes = (app: Express): void => {
  app.post('/subscription', post);
  app.delete('/subscription', remove);
  app.post('/broadcast', broadcast);
};

export default initializeRoutes;
