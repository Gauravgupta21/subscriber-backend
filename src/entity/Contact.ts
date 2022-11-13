import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {contactInterface} from "../interface/Contact";
import {User} from "./User";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    emailAddress: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @OneToOne(()=>User)
    @JoinColumn()
    createdBy:User;

    public static mockTestContactData(): contactInterface {
        const contact: Contact = new Contact();
        contact.emailAddress = 'gauravguptager@gmail.com';
        contact.createdBy= new User();
        return contact;
    }
}
