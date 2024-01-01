import { Module } from '@nestjs/common';
import { QUEUE1Service, QUEUE2Service } from './app.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),

    BullModule.registerQueue({ name: 'queue1' }, { name: 'queue2' })],


  providers: [QUEUE1Service, QUEUE2Service]
})
export class AppModule { }
