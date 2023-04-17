import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Billing } from './entities/billing.entity';
import { Address } from './entities/address.entity';
import { PostsModule } from '../posts/posts.module';
import { ImagesModule } from '../images/images.module';
import { VideosModule } from '../videos/videos.module';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [
    TypeOrmModule.forFeature([User, Profile, Billing, Address]),
    PostsModule,
    ImagesModule,
    PostsModule,
    VideosModule,
  ],
  exports: [AccountsService],
})
export class AccountsModule {}
