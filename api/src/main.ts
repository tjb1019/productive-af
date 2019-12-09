import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import cors from './config/cors.config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors);
  await app.listen(3000);

  // hot reload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
