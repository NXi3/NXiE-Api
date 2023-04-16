import { User } from 'apps/api/src/api/accounts/entities/user.entity';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: User;
}
