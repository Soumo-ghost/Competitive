/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let a=0;
    let hold=0;
    let r=0;
    for(let i=0;i<nums.length;i++){
        for(let j=2; j<=(nums[i]/2);j++){
            if(nums[i]%j===0){
                a++;
                hold=hold+j;
                if(a>5){
                    break;
                }
            }
        }
        if(a===2){
            r=r+hold+1+nums[i];
            a=0;
            hold=0;
        }
        else{
             a=0;
            hold=0;
        }
        
    }
    return r;
}