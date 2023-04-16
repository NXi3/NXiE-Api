import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { AccountsModule } from 'apps/api/src/api/accounts/accounts.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { RolesModule } from './roles/roles.module';
import { jwtConstants } from './constants';

@Module({
  imports: [
    AccountsModule,
    RolesModule,
    PassportModule.register({ defaultStrategy: 'local' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [SecurityService, LocalStrategy],
  exports: [SecurityService],
})
export class SecurityModule {}
