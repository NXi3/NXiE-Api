import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('address', { schema: 'accounts' })
export class Address {
  @PrimaryColumn()
  @ApiProperty()
  propertyNo: number;
  @Column()
  @ApiProperty()
  street: string;
  @Column()
  @ApiProperty()
  city: string;
  @Column()
  @ApiProperty()
  county: string;
  @Column()
  @ApiProperty()
  country: string;
  @Column()
  @ApiProperty()
  postcode: string;

  @OneToOne(() => User, (user) => user.address)
  @ApiProperty()
  user: User;
}
