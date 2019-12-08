import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DoController } from './controllers/do/do.controller';

import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, DoController, UsersController],
  providers: [AppService],
})
export class AppModule {}
