interface BodyArea {
    id: string
    name: string
}

interface BaseExercise {

    id: string
    name: string
    icon: url
    description: string
    trainedBodyAreas: string[]
}

interface ResistanceExercise extends BaseExercise {
    type: "RESISTANCE"
}
interface BodyWeightExercise extends BaseExercise {
    type: "BODYWEIGHT"
}

type Exercise = ResistanceExercise | BodyWeightExercise

interface WorkoutStep {

    id: string
    exerciseId: string
    weightKg?: number
    reps?: number
    durationMs?: number
}

interface Workout {

    id: string
    date: Date

    steps: WorkoutStep[]
}

const Exercises: Record<string, Exercise> = {

    "PUSHUPS": {

        id: "PUSHUPS",
        name: "Pushups",
        type: "BODYWEIGHT",
        icon: "",
        description: "",
        trainedBodyAreas: ["SACK", "ARSCH"],
    }
}