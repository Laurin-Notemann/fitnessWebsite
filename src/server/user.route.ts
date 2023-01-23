import { Request, Response } from "express"
import express from "express"
import { UserController } from "../controller/user.controller"

export const userRouter = express.Router()

userRouter.use(express.json())

userRouter.get("/", (req: Request, res: Response) => {
})

userRouter.post("/user", async (req: Request, res: Response) => {
    const userData = req.body
    const [error, msg] = await UserController.registerUser(userData)

    if (error != null) {
        return res.status(500).json({
            message: "Could not add User: " + error
        })
    }
    res.status(201).json(msg)
})
