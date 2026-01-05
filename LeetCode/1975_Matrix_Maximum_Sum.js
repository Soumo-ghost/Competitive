/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let MaxV = 0;
    let Min = Infinity;
    let Negetive = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            MaxV = MaxV + Math.abs(matrix[i][j]);
            if (Math.abs(matrix[i][j]) < Min) {
                Min = Math.abs(matrix[i][j]);
            }
            if (matrix[i][j] < 0) {
                Negetive++;
            }
        }
    }
    if (Negetive % 2 === 0) {
        return MaxV;
    }
    else {
        return (MaxV - (2 * Min));
    }
};