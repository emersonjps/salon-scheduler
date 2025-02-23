
import { Sequelize } from 'sequelize-typescript';
import User from './models/user.model.js';
import { Schedule } from './models/schedule.model.js';

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
        Schedule,
    ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
