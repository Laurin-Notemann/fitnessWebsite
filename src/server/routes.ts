import * as express from "express"

export const router = express.Router()

router.use(express.json())

router.get("/", async (req, res) => {
})

router.post("/", (req, res) => {
})
