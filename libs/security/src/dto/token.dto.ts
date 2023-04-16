import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty()
  expires_in: number;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
