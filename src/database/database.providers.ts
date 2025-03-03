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
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'sua_senha',
        database: 'meu_postgres',
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
