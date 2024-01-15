

import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
