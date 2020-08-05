const { traceback } = require('./traceback');

const AlignerFactory = ({
    algorithm,
    gapSymbol
}) => {
    return {
        align: (str1, str2) => {
            const {scoringMatrix, tracebackMatrix} = algorithm(str1, str2)
            const {alignedStr1, alignedStr2} = traceback(str1, str2, tracebackMatrix, gapSymbol)

            return {
                scoringMatrix,
                alignedStr1,
                alignedStr2,
                alignment: `{alignedStr1}\n${alignedStr2}`
            }
        }
    }
}

module.exports = {
    AlignerFactory: AlignerFactory
}
