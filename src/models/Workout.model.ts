import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Exercise } from "./Exercise.model";


@Entity()
export class Workout{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "date"})
    date: string

    @OneToMany(() => Exercise, (exercise) => exercise.workout)
    exercises: Relation<Exercise>[]
}