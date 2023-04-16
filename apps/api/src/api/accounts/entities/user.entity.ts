import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';
import { Profile } from './profile.entity';
import { Address } from './address.entity';
import { Billing } from './billing.entity';
import { Exclude } from 'class-transformer';
import Role from '../../../security/roles/entities/role.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity('user', { schema: 'accounts' })
export class User {
  @BeforeInsert()
  addId() {
    this.id = v4();
  }

  @PrimaryColumn('uuid', { name: 'id' })
  @ApiProperty({ description: 'unique identifier' })
  id: string;

  @Column()
  @ApiProperty({ type: String, maxLength: 64 })
  username: string;

  @Column()
  @ApiProperty({ type: String, maxLength: 64 })
  firstname: string;

  @Column()
  @ApiProperty({ type: String, maxLength: 64 })
  lastname: string;

  @Column({ unique: true, length: 64 })
  @ApiProperty({ type: String, maxLength: 64 })
  @Index({ unique: true })
  email?: string;

  @Column()
  @ApiProperty()
  @Exclude()
  password: string;

  // OTHER ENTITIES
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({ name: 'profile_id' })
  @ApiProperty()
  profile: Profile;

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn({ name: 'address_id' })
  @ApiProperty()
  address: Address;

  @OneToOne(() => Billing, (billing) => billing.user)
  @JoinColumn({ name: 'billing_id' })
  @ApiProperty()
  billing: Billing;

  // // SOCIAL ENTITIES
  @OneToMany(() => Post, (post: Post) => post.authorId)
  public posts?: Post[];

  @ManyToMany(() => Role, {
    cascade: true,
  })
  @JoinTable({
    name: 'users_roles',
  })
  roles: Role[];

  // BOOLEANS
  @Column()
  @ApiProperty({ type: Boolean })
  verified: boolean;

  @Column()
  @ApiProperty()
  isAdmin: boolean;
}
