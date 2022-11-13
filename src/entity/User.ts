import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { userInterface } from '../interface/User';

export enum gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: gender,
    nullable: true,
  })
  gender: gender;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  public static mockTestBoard(): userInterface {
    const user: User = new User();
    user.firstName = 'Gaurav';
    user.lastName = 'Gupta';
    user.age = 25;
    user.email = 'gauravguptamzn@gmail.com';
    return user;
  }
}
