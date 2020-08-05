const {defaultAlgorithm} = require("./default.algorithm");
const {AlignerFactory} = require("./aligner.factory");

const DefaultAligner = AlignerFactory({algorithm: defaultAlgorithm, gapSymbolDefault: '-'})

module.exports = {
    DefaultAligner: DefaultAligner
}
