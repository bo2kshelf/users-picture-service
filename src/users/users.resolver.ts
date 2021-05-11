import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {ImageproxyService} from '../imageproxy/imageproxy.service';
import {UserEntity} from './user.entity';
import {UsersService} from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly imageproxyService: ImageproxyService,
  ) {}

  @ResolveField(() => String)
  async picture(@Parent() {id}: UserEntity): Promise<string> {
    const baseUrl = await this.usersService.ensurePicture(id);
    return this.imageproxyService.proxy(baseUrl);
  }
}
