import { Transport } from '@nestjs/microservices';

export function microServices() {
  return {
    microservices: [
      {
        name: 'redis',
        transport: Transport.REDIS,
        options: {
          url: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
        },
      },
      {
        name: 'mqtt',
        transport: Transport.MQTT,
        options: {
          url: process.env.MQTT_HOST,
        },
      },
      {
        name: 'rabbitmq',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_HOST],
          queue: process.env.RABBITMQ_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'kafka',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [process.env.KAFKA_HOST],
          },
        },
      },
      {
        name: 'grpc',
        transport: Transport.GRPC,
        options: {
          url: process.env.GRPC_HOST,
          package: process.env.GRPC_PACKAGE,
          protoPath: process.env.GRPC_PROTO_PATH,
        },
      },
    ],
  };
}
