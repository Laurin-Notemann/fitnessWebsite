import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type hash = string

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: hash
}