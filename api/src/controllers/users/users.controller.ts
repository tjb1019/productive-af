import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {

  @Get()
  createUser(@Req() req: Request) {
    return [
      'go to work',
      'learn something new',
      'workout',
      'walk the dogs',
      'massage molly',
    ];
  }
}
