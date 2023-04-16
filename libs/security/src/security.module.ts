import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { AccountsModule } from 'apps/api/src/api/accounts/accounts.module';
import { RolesModule } from '@security/security/roles/roles.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@security/security/constants';

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
  providers: [SecurityService],
  exports: [SecurityService],
})
export class SecurityModule {}
