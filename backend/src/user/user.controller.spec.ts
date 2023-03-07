import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as request from 'supertest';
import { AppModule } from './../app.module';
import { INestApplication } from '@nestjs/common';

describe('UserController', () => {
  let controller: UserController;
  let app: INestApplication;
  const requestMock = { query: {} } as unknown as Request;
  const statusResponseMock = {
    send: jest.fn((x) => x),
  };
  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;
  const data = {
    firstName: 'ammar',
    lastName: 'yy',
    email: 'ammarssss@gmail.com',
    password: 'ammarrr1323',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn().mockResolvedValue(data),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
            findById: jest.fn(), // <-------------- Add this
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Check status of the user request', () => {
    it('/should return health status as 200', async () => {
      await request(app.getHttpServer()).get('/user/health').expect(200);
    });
    it('/Test signup request', async () => {
      const response = await request(app.getHttpServer())
        .post('/user/signUp')
        .send(data)
        .expect(201);
    });
  });
});
