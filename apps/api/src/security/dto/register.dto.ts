import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(16)
  @ApiProperty()
  password: string;
}
