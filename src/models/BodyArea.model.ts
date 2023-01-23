import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Exercise } from "./Exercise.model";

@Entity()
export class BodyArea{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Exercise, (exercise) => exercise.trainedBodyAreas)
    exercise: Relation<Exercise>
}