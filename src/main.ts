import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Schedule API')
        .setDescription('The scheluder API description')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'Authorization',
                in: 'header',
            },
            'jwt-auth', // <- nome do esquema, usado abaixo
        )
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    app.enableCors({
        origin: ['http://localhost:3001'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept, Authorization', // Adicionado 'Authorization'
        credentials: true, // Permitir envio de cookies e cabeçalhos de autenticação
    });
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch(error => {
    console.error('Error during application bootstrap:', error);
});
