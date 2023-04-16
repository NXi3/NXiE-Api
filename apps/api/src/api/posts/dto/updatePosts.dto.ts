import { PartialType } from '@nestjs/swagger';
import { CreatePostsDto } from "./createPosts.dto";

export class UpdatePostsDto extends PartialType(CreatePostsDto) {}
