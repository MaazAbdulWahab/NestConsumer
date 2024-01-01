import { Module } from '@nestjs/common';
import { QUEUE1Service, QUEUE2Service } from './app.service';
import { BullModule } from '@nestjs/bull';
import { config } from 'dotenv'
config()

let queuesToListen = process.env.QUEUES
let queuesToInject = []
let providerQUEUEMappings = { 'queue1': QUEUE1Service, 'queue2': QUEUE2Service }
let providers = []
queuesToListen.split(',').forEach((n) => {
  queuesToInject.push({ name: n })
  providers.push(providerQUEUEMappings[n])
})


@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),

    BullModule.registerQueue(...queuesToInject)],


  providers: providers
})
export class AppModule { }
