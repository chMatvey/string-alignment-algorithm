const {createZeroMatrix, createDefaultTracebackMatrix} = require('./matrix')
const {Directions} = require('./direction')

function defaultAlgorithm(str1, str2) {
    const height = str1.length + 1 // rows
    const width = str2.length + 1  // columns

    const scoringMatrix = createZeroMatrix(height, width)
    const tracebackMatrix = createDefaultTracebackMatrix(height, width)

    // Fill the matrix
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                scoringMatrix[i][j] = scoringMatrix[i - 1][j - 1] + 1
            } else {
                scoringMatrix[i][j] = Math.max(scoringMatrix[i - 1][j], scoringMatrix[i][j - 1]);
            }

            const scores = [
                {
                    score: scoringMatrix[i - 1][j],
                    direction: Directions.TOP
                },
                {
                    score: scoringMatrix[i][j - 1],
                    direction: Directions.LEFT
                },
                {
                    score: scoringMatrix[i][j],
                    direction: Directions.DIAGONAL
                }
            ]

            const maxScore = scores.reduce(
                (max, score) => score.score > max.score ? score : max
            )

            tracebackMatrix[i][j] = maxScore.direction
        }
    }

    return {
        scoringMatrix,
        tracebackMatrix
    };
}

module.exports = {
    defaultAlgorithm: defaultAlgorithm
}
