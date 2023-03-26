import express, {
    Express,
    Request,
    Response,
  } from 'express';
  import path from 'path';
  
  import { errorHandler, requestLogger, unknownEndpoint } from './lib/middleware';

  
  const cors = require('cors');
  
  const app: Express = express();
  
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  app.get('/', async (req: Request, res: Response) => {
    res.send('hello world');
  });
  
  app.get('/*', async (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  app.use(unknownEndpoint);
  app.use(errorHandler);
  
  export default app;
  