import { Injectable } from '@nestjs/common';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';

const env = 'development'; //process.env.NODE_ENV || 'development';

const configs: Record<string, SequelizeModuleOptions> = {
    development: {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'sua_senha',
        database: process.env.DB_NAME || 'seu_banco',
        autoLoadModels: true,
        synchronize: true,
        logging: console.log,
        query: { raw: true },
        dialectOptions: { statement_timeout: 98000 },
    },
    production: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadModels: true,
        synchronize: false,
        logging: false,
        query: { raw: true },
        dialectOptions: { statement_timeout: 98000 },
    },
};

@Injectable()
export class DatabaseConfig implements SequelizeOptionsFactory {
    createSequelizeOptions(): SequelizeModuleOptions {
        return configs[env];
    }
}
