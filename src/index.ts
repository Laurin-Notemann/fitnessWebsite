import { connectToFitnessDB } from "./connection/connection";
import { app } from "./server/app";

const PORT = 3000

connectToFitnessDB()

app.listen(PORT, () => (
    console.log("Server listens on port: ", PORT)
))
