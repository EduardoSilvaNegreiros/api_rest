import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import './config/database';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
