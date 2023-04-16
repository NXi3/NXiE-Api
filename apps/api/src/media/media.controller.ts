import { Body, Controller, Get, Post } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get('v1/vhosts')
  async getVhosts() {
    return await this.mediaService.getVhosts();
  }
}
