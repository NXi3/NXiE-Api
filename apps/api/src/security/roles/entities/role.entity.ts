import { BeforeInsert, Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

@Entity('roles', { schema: 'permissions' })
export default class Role {
  @BeforeInsert()
  addId() {
    this.id = v4();
  }

  @PrimaryColumn('uuid', { name: 'id' })
  @ApiProperty({ description: 'unique identifier' })
  id: string;

  @ApiProperty({ type: String, maxLength: 64 })
  @Column({ length: 64 })
  @Index({ unique: true })
  name: string;
}
