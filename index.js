const m = 1;
const s = -1;
const d = -1;

function calculate() {
    const first = document.getElementById("first_str").value;
    const second = document.getElementById("second_str").value;
    const lcs = LCS(first, second);

    document.getElementById("result").style.display = "block";

    const textArea = document.getElementById("result_text");
    textArea.value = lcs.join("");
    M.textareaAutoResize(textArea);
    textArea.focus();
}

function createMatrix(first, second) {
    const row = first.length + 1;
    const column = second.length + 1;

    const matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < column; j++) {
            matrix[i].push(0);
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (first[i - 1] === second[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }

    return matrix;
}

function LCS(first, second) {
    const matrix = createMatrix(first, second);
    const lcs = [];

    let i = first.length;
    let j = second.length;

    while (i > 0 && j > 0) {
        if (first[i - 1] === second[j - 1]) {
            lcs.push(first[i - 1]);
            i--;
            j--;
        } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.reverse();
}
