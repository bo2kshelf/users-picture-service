import {Injectable} from '@nestjs/common';

@Injectable()
export class IdenticonsService {
  async createIdenticon(id: string): Promise<string> {
    return `https://identicon-api.herokuapp.com/${id}/256?format=png`;
  }
}
