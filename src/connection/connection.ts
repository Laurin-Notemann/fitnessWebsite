import { DataSource } from "typeorm";
import { config } from "dotenv"
import { User } from "../models/User.model";
import { Workout } from "../models/Workout.model";

config()

export const fitnessDB = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URI,
    entities: [
        User,
        Workout
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