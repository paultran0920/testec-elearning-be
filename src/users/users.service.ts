import { Injectable } from '@nestjs/common';
import { toHash } from 'src/utils/helpers';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  private usersRepository!: UserRepository;

  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {
    // Work around solution as the repository injection does not work for now. Why?
    this.usersRepository = this.dataSource.getRepository(User);
  }

  async create(createUserDto: CreateUserDto) {
    const user: User = {
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      userName: createUserDto.userName,
      phone: createUserDto.phone,
      email: createUserDto.email,
      userRole: createUserDto.userRole,
      password: await toHash(
        createUserDto.password || process.env.DEFAULT_PASSWORD,
      ),
    };

    return await this.usersRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(userName: string): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({ userName });
  }

  async remove(userName: string) {
    await this.usersRepository.delete(userName);
  }
}
