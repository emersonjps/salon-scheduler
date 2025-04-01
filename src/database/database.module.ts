import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models.module';
import { DatabaseConfig } from './database.config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            useClass: DatabaseConfig,
        }),
        ModelsModule,
    ],
    exports: [],
})
export class DatabaseModule {}
