import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create a microservice instance
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://bwaflyrd:nHTrzf-RTS7Qwnwcz0IgjKMk4G7xk62S@seal.lmq.cloudamqp.com/bwaflyrd'],
      queue: 'product_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Apply global validation pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Start the microservice
  await app.listen();
  console.log(`Microservice is running and connected to RabbitMQ`);
}
bootstrap();
