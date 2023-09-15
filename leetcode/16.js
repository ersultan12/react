/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let res = []
    let cnt = 0;
    while(cnt < arr.length) {
        res.push(arr.slice(cnt, size + cnt))
        cnt += size;
    }
    return res
};
