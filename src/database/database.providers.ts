
import { Sequelize } from 'sequelize-typescript';
import User from './models/user.model.js';

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
        User
    ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
