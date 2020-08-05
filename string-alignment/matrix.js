const {Directions} = require('./direction')

const createZeroMatrix = (heigth, width, fill = 0) =>
    Array(heigth)
        .fill(fill)
        .map(() => Array(width).fill(fill))

const createDefaultTracebackMatrix = (heigth, width) => {
    const matrix = []
    for (let row = 0; row < heigth; row += 1) {
        if (row === 0) {
            matrix[row] = Array(width).fill(Directions.LEFT)
        } else {
            matrix[row] = Array(width).fill(Directions.NONE)
            matrix[row][0] = Directions.TOP
        }
        matrix[0][0] = Directions.NONE
    }
    return matrix
};

module.exports = {
    createZeroMatrix: createZeroMatrix,
    createDefaultTracebackMatrix: createDefaultTracebackMatrix
}
