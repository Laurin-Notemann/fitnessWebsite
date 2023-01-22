import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./Exercise.model";

@Entity()
export class Sets {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Exercise, (exercise) => exercise.sets)
    exercise: Exercise
}
