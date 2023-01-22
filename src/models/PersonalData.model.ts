import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User.model";

@Entity()
export class PersonalData{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    weight: number

    @Column()
    height: number
}