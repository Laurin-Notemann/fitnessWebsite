import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./Exercise.model";

@Entity()
export class BodyArea{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Exercise, (exercise) => exercise.trainedBodyAreas)
    exercise: Exercise
}