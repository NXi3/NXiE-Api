import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AccountsService } from '../api/accounts/accounts.service';
import { User } from '../api/accounts/entities/user.entity';

@Injectable()
export class SecurityService {
  constructor(private userService: AccountsService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username, password);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(register: RegisterDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(register.password, 10);
    const user = new User();
    user.username = register.username;
    user.email = register.email;
    user.password = hashedPassword;
    return this.userService.create(user);
  }

  async login(login: LoginDto): Promise<User> {
    return this.userService.findOne(login.username, login.password);
  }

  async logout() {
    return Promise.resolve(undefined);
  }

  async refresh() {
    return Promise.resolve(undefined);
  }

  async forgotPassword() {
    return Promise.resolve(undefined);
  }

  async resetPassword() {
    return Promise.resolve(undefined);
  }
}
