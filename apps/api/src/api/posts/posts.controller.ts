import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Social Posts: Create, Read, Update, Delete')
@Controller('accounts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create A New Social Post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('post:create')
  async create() {}

  @ApiOperation({ summary: 'Read A Social Post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('post:read')
  async read() {}

  @ApiOperation({ summary: 'Update A Social Post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put('post:update')
  async update() {}

  @ApiOperation({ summary: '[Soft] Delete A Social Post' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('post:delete:soft')
  async softDelete() {}

  @ApiOperation({ summary: '[Hard] Delete A Social Post [Admin Only]' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('post:delete')
  async hardDelete() {}
}
