import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { env } from './utils/env';

async function bootstrap() {
    const logger = new Logger('Bootstrap');

    const port = env.get('APP_PORT');
    const url = env.get('APP_URL');

    const app = await NestFactory.create(AppModule);

    await app.listen(port, () => logger.log(`Server running on ${url}`));
}

bootstrap();
