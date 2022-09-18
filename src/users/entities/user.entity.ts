import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ name: 'user_name' })
  userName: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'phone' })
  phone?: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password?: string;

  @Column({ name: 'user_role' })
  userRole: UserRoles;
}

export enum UserRoles {
  Admin = 'admin',
  Mentor = 'mentor',
  Student = 'student',
}
