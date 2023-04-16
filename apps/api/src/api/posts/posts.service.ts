import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  create() {
    return Promise.resolve(undefined);
  }

  update() {
    return Promise.resolve(undefined);
  }

  delete() {
    return Promise.resolve(undefined);
  }

  getPost() {
    return Promise.resolve(undefined);
  }

  async getPosts() {
    return await this.postsRepository.find();
  }
}
