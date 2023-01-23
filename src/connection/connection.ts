import { DataSource } from "typeorm";
import { config } from "dotenv"
import { User } from "../models/User.model";
import { Workout } from "../models/Workout.model";
import { BodyArea } from "../models/BodyArea.model";
import { PersonalData } from "../models/PersonalData.model";
import { Sets } from "../models/Sets.model";
import { Exercise } from "../models/Exercise.model";

config()

export const fitnessDB = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URI,
    entities: [
        User,
        Workout,
        BodyArea,
        PersonalData,
        Sets,
        Exercise
    ],
    synchronize: true,
    logging: false
})


export async function connectToFitnessDB() {
    try {
        await fitnessDB.initialize()
        console.log("Successfullly connected to 'fitnessbackenddb'!")
    } catch (error) {
        console.log("Connection to 'fitnessbackenddb' failed: ", error)
    }

}