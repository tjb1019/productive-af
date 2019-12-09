import { Controller, Get } from '@nestjs/common';

@Controller('do')
export class DoController {

  @Get()
  getTodos(): string[] {
    return [
      'go to work',
      'learn something new',
      'workout',
      'walk the dogs',
      'massage molly',
    ];
  }
}
