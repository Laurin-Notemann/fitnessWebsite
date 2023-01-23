import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { PersonalData } from "./PersonalData.model";

type hash = string

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => PersonalData)
    @JoinColumn()
    personalData: Relation<PersonalData>
}