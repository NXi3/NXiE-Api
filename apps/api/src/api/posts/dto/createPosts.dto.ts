import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;
}
