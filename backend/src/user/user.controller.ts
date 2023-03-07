import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  Req,
  Res,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Constants } from '../utils/constants';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { User } from './entities/user.entity';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/health')
  health(@Req() request, @Res() response) {
    return response.sendStatus(200);
  }

  @Post('/signUp')
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const user: User = await this.userService.findUserByEmail(
      createUserDto.email,
    );
    if (user) {
      throw new BadRequestException('User already exists!');
    } else {
      return this.userService.create(createUserDto);
    }
  }

  @ApiSecurity('JWT-auth')
  @Get()
  @UseGuards(new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  findAll(@Req() req: Request) {
    return this.userService.findAll();
  }

  @Get()
  findUsers(@Req() request, @Res() response) {
    const { count, page } = request.query;
    if (!count || !page) {
      response.status(400).send({ msg: 'Testing' });
    } else {
      response.send(200);
    }
  }

  @ApiSecurity('JWT-auth')
  @Delete(':id')
  @UseGuards(new RoleGuard(Constants.ROLES.ADMIN_ROLE))
  remove(@Param('id') id: string, @Req() req) {
    return this.userService.remove(+id);
  }
}
