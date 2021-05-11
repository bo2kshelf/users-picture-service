import {Injectable} from '@nestjs/common';
import {IdenticonsService} from '../identicons/identicons.service';
import {PrismaService} from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly identiconService: IdenticonsService,
  ) {}

  async ensurePicture(id: string): Promise<string> {
    return this.prismaService.user
      .upsert({
        where: {id},
        create: {
          id,
          picture: await this.identiconService.createIdenticon(id),
        },
        update: {},
        select: {picture: true},
      })
      .then(({picture}) => picture);
  }
}
