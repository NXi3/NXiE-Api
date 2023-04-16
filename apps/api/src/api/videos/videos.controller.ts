import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Videos: Create, Read, Update, Upload, Delete')
@Controller('accounts')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @ApiOperation({ summary: 'Create A New Video' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('video:create')
  async create() {}

  @ApiOperation({ summary: 'Watch A Video' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('video:watch')
  async watch() {}

  @ApiOperation({ summary: 'Update A Video' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put('video:update')
  async update() {}

  @ApiOperation({ summary: 'Upload A Video' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('video:upload')
  async upload() {}

  @ApiOperation({ summary: '[Soft] Delete A Video' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('video:delete:soft')
  async softDelete() {}

  @ApiOperation({ summary: '[Hard] Delete A Video [Admin Only]' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('video:delete')
  async hardDelete() {}
}
