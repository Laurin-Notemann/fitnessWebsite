import { Exercise } from "./Exercise.type"

interface Workout {
    id: string
    date: Date

    exercises: Exercise[]
}



const exampleWorkout: Workout = {
    id: "1",
    date: new Date(),

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
            sets: [
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
            sets: [
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