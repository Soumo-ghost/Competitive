/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const a = 1000000007n; 
    

    let aba = 6n;
    let abc = 6n;

    for (let i = 1; i < n; i++) {
        let prevAba = aba;
        let prevAbc = abc;

        
        aba = (3n * prevAba + 2n * prevAbc) % a;
        abc = (2n * prevAba + 2n * prevAbc) % a;
    }

    return Number((aba + abc) % a);
};