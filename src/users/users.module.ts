import {Module} from '@nestjs/common';
import {IdenticonsModule} from '../identicons/identicons.module';
import {ImageproxyModule} from '../imageproxy/imageproxy.module';
import {PrismaModule} from '../prisma/prisma.module';
import {UsersResolver} from './users.resolver';
import {UsersService} from './users.service';

@Module({
  imports: [PrismaModule, IdenticonsModule, ImageproxyModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersResolver],
})
export class UsersModule {}
