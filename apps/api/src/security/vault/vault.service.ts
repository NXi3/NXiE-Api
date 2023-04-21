import { Injectable } from '@nestjs/common';
import vault from 'node-vault';

@Injectable()
export class VaultService {
  private readonly client: vault.client;

  constructor() {
    this.client = vault({
      apiVersion: 'v1',
      endpoint: 'https://vault.nxie.uk',
    });
  }

  login(username, password) {
    return { token: "" };
  }

  async register(username) {

  }
}
