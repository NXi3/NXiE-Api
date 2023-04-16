import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(username: string, email: string): Promise<User> {
    return this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }

  async create(user: User) {
    return this.userRepository.save(user);
  }

  async profile() {
    return Promise.resolve(undefined);
  }

  async update() {
    return Promise.resolve(undefined);
  }

  async delete() {
    return Promise.resolve(undefined);
  }

  async getAll() {
    return Promise.resolve(undefined);
  }
}
