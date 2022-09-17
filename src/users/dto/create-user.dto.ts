import { UserRoles } from '../entities/user.entity';

export class CreateUserDto {
  userName: string; // PK
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  userRole: UserRoles;
  password?: string;
}
