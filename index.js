const {DefaultAligner} = require("./string-alignment");

const M = require('materialize-css/dist/js/materialize.min.js');

const aligner = DefaultAligner();

document.getElementById("calculate-btn").onclick = () => {
    const first = document.getElementById("first_str").value;
    const second = document.getElementById("second_str").value;

    const result = aligner.align(first, second);

    document.getElementById("result").style.display = "block";

    const textArea = document.getElementById("result_text");
    textArea.value = result.alignment;
    M.textareaAutoResize(textArea);
    textArea.focus();
}
