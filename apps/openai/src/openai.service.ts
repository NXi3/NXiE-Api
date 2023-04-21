import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {
  getHello(): string {
    return 'Hello World!';
  }
}
