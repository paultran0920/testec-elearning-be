export class User {
  userName: string; // PK
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  userRole: UserRoles;
  password?: string;
}

export enum UserRoles {
  Admin = 'admin',
  Mentor = 'mentor',
  Student = 'student',
}
