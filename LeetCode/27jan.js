/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]=String(nums[i]).split('').reduce((acc, curr) => acc + Number(curr), 0);
    }
    const min = Math.min(...nums);
    return min;
};