const {Directions} = require('./direction')

function traceback(str1, str2, tracebackMatrix, gapSymbol) {
    let [row, col] = [str1.length, str2.length]

    const aligned1 = []
    const aligned2 = []

    const updaters = alignmentUpdaters(gapSymbol)

    while (tracebackMatrix[row][col] !== Directions.NONE) {
        const direction = tracebackMatrix[row][col]
        const alignmentUpdater = updaters(direction)
        const [char1, char2] = alignmentUpdater({str1, str2, row, col})
        aligned1.unshift(char1)
        aligned2.unshift(char2)

        const coordinateUpdater = coordinateUpdaters(direction);
        [row, col] = coordinateUpdater([row, col])
    }

    return {
        alignedStr1: aligned1.join(''),
        alignedStr2: aligned2.join(''),
    }
}

const alignmentUpdaters = gapSymbol => direction => {
    const updaters = {
        [Directions.DIAGONAL]: ({str1, str2, row, col}) => [str1[row - 1], str2[col - 1]],
        [Directions.LEFT]: ({str2, col}) => [gapSymbol, str2[col - 1]],
        [Directions.TOP]: ({str1, row}) => [str1[row - 1], gapSymbol],
    }
    return updaters[direction]
}

const coordinateUpdaters = direction => {
    const getters = {
        [Directions.DIAGONAL]: ([row, col]) => [row - 1, col - 1],
        [Directions.LEFT]: ([row, col]) => [row, col - 1],
        [Directions.TOP]: ([row, col]) => [row - 1, col],
    }

    return getters[direction]
}

module.exports = {
    traceback: traceback
}

