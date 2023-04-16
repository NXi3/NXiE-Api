import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';
import { User } from "../../accounts/entities/user.entity";

@Entity('post', { schema: 'social' })
export class Post {
  @BeforeInsert()
  addId() {
    this.id = v4();
  }

  @PrimaryColumn('uuid', { name: 'id' })
  @ApiProperty({ description: 'unique identifier' })
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  authorId: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'authorId' })
  author: User;

  @Column()
  isPublished: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
