import express from "express"
import { userRouter } from "./user.route"
import cors from "cors"

export const app = express()

app.use(userRouter)

app.use(
    cors({
        origin: "*"
    })
)