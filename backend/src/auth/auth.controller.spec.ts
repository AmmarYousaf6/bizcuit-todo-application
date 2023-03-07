import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as request from 'supertest';
import { User } from 'src/user/entities/user.entity';
import { AuthController } from './auth.controller';
import { AppModule } from './../app.module';
import { INestApplication } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let app: INestApplication;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        JwtService,
        {
          provide: getRepositoryToken(User),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Check status of the user request', () => {
    it('/should return health status as 200', async () => {
      await request(app.getHttpServer()).get('/auth/health').expect(200);
    });
  });
});
