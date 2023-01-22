import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    password: hash

    @OneToOne(() => PersonalData)
    @JoinColumn()
    personalData: PersonalData
}