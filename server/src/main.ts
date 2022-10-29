import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor)

  await app.listen(4000);
}
bootstrap();
