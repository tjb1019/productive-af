import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {

  @Post()
  createUser(@Req() req: Request) {
    return 'works!';
  }
}
