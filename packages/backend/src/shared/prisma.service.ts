import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });
  }

  async onModuleInit() {
    this.$on('query', (event) => {
      console.debug(
        '\n' +
        `Query: ${event.query}` +
        '\n' +
        `Params: ${event.params}` +
        '\n' +
        `Duration: ${event.duration} ms`,
      );
    });
    this.$on('info', (event) => {
      console.log(`${event.message}`);
    });
    this.$on('error', (event) => {
      console.error(`${event.message}`);
    });
    this.$on('warn', (event) => {
      console.warn(`${event.message}`);
    });
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
