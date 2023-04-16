import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('profile', { schema: 'accounts' })
export class Profile {
  @PrimaryColumn()
  @ApiProperty()
  bio: string;
  @Column()
  @ApiProperty()
  avatar: string;
  @Column()
  @ApiProperty()
  cover: string;

  @OneToOne(() => User, (user) => user.profile)
  @ApiProperty()
  user: User;
}
