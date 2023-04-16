import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Social Media: Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':id')
  async getPost() {
    return this.postsService.getPost();
  }

  @Get()
  async getPosts() {
    return this.postsService.getPosts();
  }
}
