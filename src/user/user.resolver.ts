import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserInput } from "./inputs/user.input";


@Resolver()
export class UserResolver {
   constructor(
     private readonly userService: UserService,
     
 ) {}

  @Query(()=>String)
  async hello()  {
    return 'hello'
  }
  @Query(()=>[CreateUserDto])
  async user()  {
    return this.userService.findAll();
  }

  @Mutation(()=>[CreateUserDto])
  async createUser(@Args('input' ) input:UserInput)   {
    return this.userService.create(input);
  }




}