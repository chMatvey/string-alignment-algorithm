// function calculate() {
//     const first = document.getElementById("first_str").value;
//     const second = document.getElementById("second_str").value;
//     const result = LCS(first, second);
//
//     document.getElementById("result").style.display = "block";
//
//     const textArea = document.getElementById("result_text");
//     textArea.value = result.lcs.length + '\n' + result.first.join("") + '\n' + result.second.join("");
//     M.textareaAutoResize(textArea);
//     textArea.focus();
// }

const {defaultAligner} = require("./string-alignment");

const result = defaultAligner.align('PRETTY', 'PRTTEIN')

console.log(result)
