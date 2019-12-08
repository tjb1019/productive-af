import { Test, TestingModule } from '@nestjs/testing';
import { DoController } from './do.controller';

describe('Do Controller', () => {
  let controller: DoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoController],
    }).compile();

    controller = module.get<DoController>(DoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
