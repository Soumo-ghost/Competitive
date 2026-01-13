/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let totalArea = 0;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const [x, y, l] of squares) {
        totalArea += l * l;
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y + l);
    }

    const targetArea = totalArea / 2;
    let low = minY;
    let high = maxY;

    for (let i = 0; i < 100; i++) {
        const mid = (low + high) / 2;
        let currentAreaBelow = 0;

        for (const [x, y, l] of squares) {

            const heightBelow = Math.max(0, Math.min(mid, y + l) - y);
            

            currentAreaBelow += l * heightBelow;
        }

        if (currentAreaBelow < targetArea) {
            low = mid; 
        } else {
            high = mid;
        }
    }

    return low;
};