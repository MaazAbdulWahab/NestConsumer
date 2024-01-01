import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';

@Injectable()
@Processor('queue1')
export class QUEUE1Service {

  @Process('job')
  async transcode(job: Job<unknown>) {
    console.log(job.data, job.id)
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}

@Injectable()
@Processor('queue2')
export class QUEUE2Service {
  @Process('job')
  async transcode(job: Job<unknown>) {
    console.log(job.data, job.id)
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}

