import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiService {
  constructor() {}

  configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });

  openai = new OpenAIApi(this.configuration);

  completion = this.openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'This is a test',
  });
}
