import { fitnessDB } from "../connection/connection";
import { User } from "../models/User.model";
import { hash } from "../types/types";


export class UserController {
    // get User by email and password
    static loginUserByEmail = (email: string, password: string) => {
    }
    // get User by email and password
    static loginUserByName = (name: string, password: string) => {
    }
    // add new User
    static registerUser = async (userData: RegisterUserPayload) => {
        try {
            const newUser = new User()
            newUser.name = userData.name
            newUser.email = userData.email
            newUser.password = userData.password

            await fitnessDB.manager.save(newUser)

            const msg = "Successfully added User."
            
            return [null, msg]
        } catch (error) {
            return [error, null]
        }
    }

    static updateUser = (name = "", email = "", password = "") => {
    }

    static delteUserById = (id: string) => {
    }
}

interface RegisterUserPayload {
    name: string
    email: string
    password: hash
}
