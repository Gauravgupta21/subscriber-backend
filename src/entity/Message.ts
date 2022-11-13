import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { userInterface } from '../interface/User';
import {User} from "./User";
import {messageInterface} from "../interface/Message";


@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject:string;

  @Column()
  body:string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(()=>User)
  @JoinColumn()
  createdBy:User;

  // @Column({ type: 'timestamp', nullable: true })
  // timestamp: Date;

  public static mockTestMessage(): messageInterface {
    const message: Message = new Message();
    message.subject = 'Introduction';
    message.body = 'Hello I am Gaurav Gupta, Looking forward to hearing soon.';
    message.createdBy = new User(); // need to add exists user
    return message;
  }
}
