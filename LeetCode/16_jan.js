/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let re=[];
    for(let i=0; i<arr.length; i=i+size){
        let chinck=arr.slice(i, i+size);
        re.push(chinck);
    }
    return re;
};
