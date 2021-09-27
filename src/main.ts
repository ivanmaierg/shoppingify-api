import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  console.log('app running on: ', AppModule.port);
  await app.listen(AppModule.port);
}
bootstrap();
