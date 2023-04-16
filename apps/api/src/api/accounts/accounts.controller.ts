import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../security/interfaces/auth.interface';
import { Roles } from '../../security/roles/decorators/roles.decorator';
import { Role } from '../../security/roles/enum/role.enum';

@ApiTags('Account Management: Basic Account Registration & Login')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // ACCOUNT REGISTRATION & LOGIN
  @Public()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
  })
  @ApiOperation({ summary: 'Register A New Account.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async register() {}

  @Public()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
  })
  @ApiOperation({ summary: 'Login User Account.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('login')
  async login() {}

  // ACCOUNT MANAGEMENT
  @Roles(Role.User)
  @ApiOperation({ summary: 'Access Account Profile' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('profile')
  async profile() {}

  @Roles(Role.User)
  @ApiOperation({ summary: 'Update Account Profile' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put('update')
  async update() {}

  @Roles(Role.Admin)
  @ApiOperation({ summary: 'Delete Account Profile [Admin Only]' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('delete')
  async delete() {}
}
