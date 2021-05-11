import {Module} from '@nestjs/common';
import {GraphQLFederationModule} from '@nestjs/graphql';
import {PrismaModule} from './prisma/prisma.module';
import {UserEntity} from './users/user.entity';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [UserEntity],
      },
    }),
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule {}
