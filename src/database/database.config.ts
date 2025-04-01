import { Injectable } from '@nestjs/common';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';

@Injectable()
export class DatabaseConfig implements SequelizeOptionsFactory {
    createSequelizeOptions(): SequelizeModuleOptions {
        return {
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '5432', 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            autoLoadModels: true,
            synchronize: true, // Ativar apenas em desenvolvimento
            // synchronize: false, // Ativar apenas em produção
            logging: console.log,
            query: {
                raw: true,
            },
            dialectOptions: { statement_timeout: 98000 },
        };
    }
}
