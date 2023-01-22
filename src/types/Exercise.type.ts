type Exercise = ResistanceExercise | BodyWeightExercise

interface ResistanceExercise extends BaseExercise {
    type: "RESISTANCE"
}
interface BodyWeightExercise extends BaseExercise {
    type: "BODYWEIGHT"
}

interface BaseExercise {
    id: string
    name: string
    icon: url
    description: string
    trainedBodyAreas: BodyArea["id"][]

    steps: Sets[]
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

const exampleWorkout: Workout = {
    id: "1",
    date: 3,

    exercises: [
        {
            id: "1",
            name: "bench press",
            icon: "www.url.com",
            description: "press the bar",
            trainedBodyAreas: [
                "chest",
                "triceps"
            ],
            type: "BODYWEIGHT",
            steps: [
                {
                    id: "1",
                    weight: 25,
                    reps: 8
                },
                {
                    id: "2",
                    weight: 25,
                    reps: 8
                },
                {
                    id: "3",
                    weight: 25,
                    reps: 8
                }
            ]
        },
        {
            id: "2",
            name: "lat pulldown",
            icon: "www.url.com",
            description: "pull down the bar",
            trainedBodyAreas: [
                "back",
                "biceps"
            ],
            type: "BODYWEIGHT",
            steps: [
                {
                    id: "1",
                    weight: 25,
                    reps: 8
                },
                {
                    id: "2",
                    weight: 25,
                    reps: 8
                },
                {
                    id: "3",
                    weight: 25,
                    reps: 8
                }
            ]
        }
    ]
}