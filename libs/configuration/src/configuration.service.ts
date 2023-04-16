import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  constructor(
    private readonly env: { [k: string]: string | undefined },
    private readonly defaults: { [k: string]: string | undefined } = {},
  ) {}

  get(key: string): string {
    return this.env[key] || this.defaults[key];
  }

  getNumber(key: string): number {
    return Number(this.get(key));
  }

  getBoolean(key: string): boolean {
    return this.get(key) === 'true';
  }

  getArray(key: string, separator = ','): string[] {
    return this.get(key).split(separator);
  }
}
