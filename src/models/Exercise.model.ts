import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Sets } from "./Sets.model";
import { BodyArea } from "./BodyArea.model";
import { Workout } from "./Workout.model";
import { url } from "../types/types";

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    type: string

    @Column({
        type: String,
        unique: true,
        nullable: true
    })
    icon: url | null

    @Column({
        type: String,
        unique: true,
        nullable: true
    })
    description: string | null
    
    @OneToMany(() => BodyArea, (bodyArea) => bodyArea.exercise)
    trainedBodyAreas: Relation<BodyArea>[]

    @OneToMany(() => Sets, (sets) => sets.exercise)
    sets: Relation<Sets>[]

    @ManyToOne(() => Workout, (workout) => workout.exercises)
    workout: Relation<Workout>
}

