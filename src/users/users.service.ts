import { Injectable } from '@nestjs/common';
import { toHash } from 'src/utils/helpers';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserRoles } from './entities/user.entity';

let users: User[] = [
  {
    firstName: 'Paul',
    lastName: 'Tran',
    userName: 'admin',
    phone: '123456789',
    email: 'paul.tran.0920@gmail.com',
    userRole: UserRoles.Admin,
    password: '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC',
  },
  {
    firstName: 'Student',
    lastName: '1',
    userName: 'student1',
    phone: '123456789',
    email: 'student.1.0920@gmail.com',
    userRole: UserRoles.Student,
    password: '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC',
  },
  {
    firstName: 'Mentor',
    lastName: '1',
    userName: 'mentor1',
    phone: '123456789',
    email: 'mentor.2.0920@gmail.com',
    userRole: UserRoles.Mentor,
    password: '$2b$10$h1PkmrcSA8FdeLrnuVo4seR7q6n/ONI8mks8Hwx1g6fB0LUjaQKNC',
  },
];

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const user: User = {
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      userName: createUserDto.userName,
      phone: createUserDto.phone,
      email: createUserDto.email,
      userRole: createUserDto.userRole,
      password: await toHash(createUserDto.password || '123456789'),
    };

    return users.push(user);
  }

  async findAll(): Promise<User[]> {
    return users;
  }

  async findOne(userName: string): Promise<User | undefined> {
    return users.find((user) => user.userName === userName);
  }

  async remove(userName: string) {
    users = users.filter((user) => user.userName !== userName);
  }
}
