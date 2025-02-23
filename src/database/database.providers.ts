
import { Sequelize } from 'sequelize-typescript';
import User from './models/user.model.js';
import { TimeGrid } from './models/timegrid.model.js';

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
      });
      sequelize.addModels([
        User,
        TimeGrid,
    ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
