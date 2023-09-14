import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));

  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 3000;
    app.enableCors();
    await app.listen(port, () => {
      logger.log(`Server is listening on port ${port}`);
    });
  } else {
    await app.listen(3000);
  }
}
bootstrap();
