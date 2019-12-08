import { Controller, Get } from '@nestjs/common';

@Controller('do')
export class DoController {

  @Get()
  getDo(): string {
    return 'do';
  }
}
