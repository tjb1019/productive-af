import { Module } from '@nestjs/common';

// controllers
import { AppController } from './app.controller';
import { UsersController } from './controllers/users/users.controller';
import { DoController } from './controllers/do/do.controller';

// services
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    DoController,
  ],
  providers: [AppService],
})
export class AppModule {}
