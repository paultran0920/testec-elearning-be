import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { User } from 'src/users/entities/user.entity';
import { isMatch } from 'src/utils/helpers';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userName);
    if (user && isMatch(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      userName: user.userName,
      sub: user.userName,
      userRole: user.userRole,
    };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret, // Add it here as register in module does not work
      }),
    };
  }
}
