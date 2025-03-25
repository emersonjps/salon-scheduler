import { Sequelize } from 'sequelize-typescript';
import User from './models/user.model.js';
import { TimeGrid } from './models/timegrid.model.js';
import { Holidays } from './models/holidays.js';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,  
        database: process.env.DB_NAME,
        logging: true, 
      });
      sequelize.addModels([
        User,
        TimeGrid,
        Holidays
    ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
