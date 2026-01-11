/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};
function largestRectangleArea(heights) {
    const stack = [];
    let max = 0;
    const extendedHeights = [...heights, 0];

    for (let i = 0; i < extendedHeights.length; i++) {
        while (stack.length > 0 && extendedHeights[i] < extendedHeights[stack[stack.length - 1]]) {
            const h = extendedHeights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        }
        stack.push(i);
    }
    
    return max;
}