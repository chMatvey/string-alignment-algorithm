const {defaultAlgorithm} = require("./default.algorithm");
const {AlignerFactory} = require("./aligner.factory");

const defaultAligner = AlignerFactory({algorithm: defaultAlgorithm, gapSymbol: '-'})

module.exports = {
    defaultAligner: defaultAligner
}
