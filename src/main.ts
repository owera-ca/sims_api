import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'dotenv/config';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'sinswear-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('SimsWear API')
    .setDescription('The SimsWear API description')
    .setVersion('1.0')
    .addTag('SimWear')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  console.log('process.env.PORT', process.env.PORT)
  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();