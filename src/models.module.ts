import * as models from '@common/models';
import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

const modelsList = Object.keys(models).map(entityIndex => models[entityIndex as keyof typeof models]);

@Global()
@Module({
    imports: [SequelizeModule.forFeature(modelsList)],
    exports: [SequelizeModule],
})
export class ModelsModule {}
