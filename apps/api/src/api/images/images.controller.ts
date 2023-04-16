import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Images: View, Update, Upload, Delete')
@Controller('accounts')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @ApiOperation({ summary: 'View An Image' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('image:view')
  async view() {}

  @ApiOperation({ summary: 'Update A Image' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put('image:update')
  async update() {}

  @ApiOperation({ summary: 'Upload A Image' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('image:upload')
  async upload() {}

  @ApiOperation({ summary: '[Soft] Delete A Image' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('image:delete:soft')
  async softDelete() {}

  @ApiOperation({ summary: '[Hard] Delete A Image [Admin Only]' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('image:delete')
  async hardDelete() {}
}
