import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
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
    await this.usersService.create(createUserDto);

    return 'User created!';
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map(({ password, ...user }) => user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userName')
  async findOne(@Param('userName') userName: string) {
    const { password, ...user } = await this.usersService.findOne(userName);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':userName')
  async remove(@Param('userName') userName: string) {
    await this.usersService.remove(userName);

    return 'User removed!';
  }
}
