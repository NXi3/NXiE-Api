import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MediaService {
  async getVhosts() {
    const response = await axios.get('http://localhost:8081/v1/vhosts');
    return response.data;
  }
}
