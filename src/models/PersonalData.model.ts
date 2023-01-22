import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User.model";

@Entity()
export class PersonalData{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    weight: number

    @Column()
    height: number
}