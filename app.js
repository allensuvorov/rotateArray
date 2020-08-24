/*
 @param {number[]} nums
 @param {number} k
 @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [1,2,3,4,5,6,7]
let k = 3

var rotate = function(array, steps) {
    // 1st solutions
    array.unshift(...array.slice(-steps));
    array.splice(-steps);
};
rotate(nums, k);
console.log(nums);