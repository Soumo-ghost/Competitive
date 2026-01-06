/**
 * @param {number} x
 * @return {boolean}
 */
// 
var isPalindrome = function (x) {
    let ans;
    const a = Array.from(String(x), Number)
    if (a.length % 2 === 0) {
        for (let i = 0; i < (a.length / 2); i++) {
            if (a[i] === a[((a.length - 1) - i)]) {
                ans = true;
            }
            else {
                ans = false;
                break;
            }
        }
    }
    else if(x<10 && x>=0){
        ans=true;
    }
    else {
        for (let i = 0; i < (a.length / 2) - 1; i++) {
            if (a[i] === a[((a.length - 1) - i)]) {
                ans = true;
            }
            else {
                ans = false;
                break;

            }
        }
    }

        return ans;
    };