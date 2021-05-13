export const getProgressWidth = (min: number, max: number, step: number, value: number): number => {
    if (value === 1) {
        return 0
    }

    let totalSteps = 0
    for (let i = min; i < max; i += step) {
        totalSteps++
    }
    const oneStepPercent = 100 / totalSteps

    let currentSteps = 0
    for (let j = min; j < value; j += step) {
        currentSteps++
    }

    let result = (oneStepPercent * currentSteps) / 10 * 10
     if (value <= 5 || (value < 15 && max >= 30)) {
         result += 5
     } else if (max <= 10) {
         result -= 2
     }

    return result
}