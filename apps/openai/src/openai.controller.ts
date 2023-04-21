import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller()
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Get()
  getHello(): string {
    return this.openaiService.getHello();
  }
}
