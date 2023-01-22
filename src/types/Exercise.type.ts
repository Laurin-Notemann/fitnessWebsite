interface BaseExercise {

    name: string
    icon: url
    descriptions: string
    trainedBodyAreas: string[]
}

interface ResistanceExercise extends BaseExercise {
    type: "RESISTANCE"
}
interface BodyWeightExercise {
    type: "BODYWEIGHT"
}

type Exercise = ResistanceExercise | BodyWeightExercise

type WorkoutStep = {
    exerciseId: string

    weightKg: number

    reps: number
}