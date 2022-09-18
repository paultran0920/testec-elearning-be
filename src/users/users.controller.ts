import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto);
      return { result: 'User created!' };
    } catch (err: any) {
      throw new BadRequestException('Can not create new user!');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return users.map(({ password, ...user }) => user);
    } catch (err: any) {
      throw new BadRequestException('Can not fetch users!');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userName')
  async findOne(@Param('userName') userName: string) {
    try {
      const { password, ...user } = await this.usersService.findOne(userName);
      return user;
    } catch (err: any) {
      throw new BadRequestException('Can not fetch user!');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userName')
  async remove(@Param('userName') userName: string) {
    try {
      await this.usersService.remove(userName);
      return { result: 'User removed!' };
    } catch (err: any) {
      throw new BadRequestException('Can not remove user!');
    }
  }
}
