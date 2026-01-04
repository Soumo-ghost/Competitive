/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
let a =BigInt(digits.join(''));
   a=++a;
   const arr = [...a.toString()].map(Number)
    return arr;
   
};