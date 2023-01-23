import { url } from "./types"

export type Exercise = ResistanceExercise | BodyWeightExercise

interface ResistanceExercise extends BaseExercise {
    type: "RESISTANCE"
}
interface BodyWeightExercise extends BaseExercise {
    type: "BODYWEIGHT"
}

interface BaseExercise {
    id: string
    name: string
    icon?: url
    description?: string
    trainedBodyAreas: BodyArea["id"][]

    sets: Sets[]
}

type Sets = {
    id: string
    weight: number
    reps?: number
    durationMs?: number
}

interface BodyArea {
    id: string
    name: string
}
