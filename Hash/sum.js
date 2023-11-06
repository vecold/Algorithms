/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const length = nums.length;
    for(let index = 0; index<length;index++) {
        const num = nums[index];
        const left = target - num;
        if(map.has(left)) {
            return [index,map.get(left)];
        }
        map.set(num,index);
    }
    
    return;
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums,target))