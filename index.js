function calculate() {
    const first = document.getElementById("first_str").value;
    const second = document.getElementById("second_str").value;
    const result = LCS(first, second);

    document.getElementById("result").style.display = "block";

    const textArea = document.getElementById("result_text");
    textArea.value = result.lcs.length + '\n' + result.first.join("") + '\n' + result.second.join("");
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

    while (i >= 1 && j >= 1) {
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

    const result = {
        lcs: lcs.reverse(),
        first: [],
        second: []
    };

    let lcsIndex = 0;
    i = 0;
    j = 0;

    while (i < first.length || j < second.length) {
        if ((lcsIndex === lcs.length && i < first.length && j < second.length)
            || (first[i] !== lcs[lcsIndex] && second[j] !== lcs[lcsIndex])) {
            result.first.push(first[i]);
            result.second.push(second[j]);
            i++;
            j++;
        } else if ((lcsIndex === lcs.length && i < first.length) || first[i] !== lcs[lcsIndex]) {
            result.first.push(first[i]);
            result.second.push('-');
            i++;
        } else if (lcsIndex === lcs.length || second[j] !== lcs[lcsIndex]) {
            result.second.push(second[j]);
            result.first.push('-');
            j++;
        } else {
            result.first.push(lcs[lcsIndex]);
            result.second.push(lcs[lcsIndex]);
            lcsIndex++;
            i++;
            j++;
        }
    }

    return result;
}
