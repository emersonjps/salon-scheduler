import 'tsconfig-paths/register';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

let app: INestApplication;

export default async function globalSetup() {
  const appTestModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = appTestModule.createNestApplication();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.init();

  global.__APP__ = app;
}
