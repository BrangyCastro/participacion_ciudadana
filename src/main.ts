import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('EndPoind de participación ciudadana.')
    .setDescription('http://localhost/api/')
    .setBasePath('http://localhost/api/')
    .setVersion('0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    logger.log(`Aceptación de solicitudes de origen "${serverConfig.origin}"`);
  }
  app.setGlobalPrefix('api');
  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Aplicacion escuchando en el ${port}`);
}
bootstrap();
