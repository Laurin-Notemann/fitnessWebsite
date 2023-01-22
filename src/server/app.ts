import express from "express"



export const app = express()

export const router = express.Router()
router.use(express.json())

app.use(router)



