import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('billing', { schema: 'accounts' })
export class Billing {
  @PrimaryColumn()
  @ApiProperty()
  accountName: string;
  @Column()
  @ApiProperty()
  accountType: string;
  @Column()
  @ApiProperty()
  accountNumber: string;
  @Column()
  @ApiProperty()
  sortCode: string;

  @OneToOne(() => User, (user) => user.billing)
  @ApiProperty()
  user: User;
}
