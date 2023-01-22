import { fitnessDB } from "../connection/connection";
import { User } from "../models/User.model";


export class UserController {
    // get User by email and password
    static loginUserByEmail = (email: string, password: string) => {
    }
    // get User by email and password
    static loginUserByName = (name: string, password: string) => {
    }
    // add new User
    static registerUser = (name: string, email: string, password: string) => {
    }

    static updateUser = (name = "", email = "", password = "") => {
    }

    static delteUserById = (id: string) => {
    }
}


