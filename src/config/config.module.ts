import config from './configuration';
import { validate } from './env.validation';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';

const currentEnvFile =
  process.env.NODE_ENV === 'development' ? '.env.development' : '.env';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [currentEnvFile],
      load: [config],
      isGlobal: true,
      validate,
    }),
  ],
})
export class AppConfigModule {}
