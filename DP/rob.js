// [1,2,3,1] 4
// [2,7,9,3,1] 12
/**
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @param nums 
 */
var rob = function(nums) {
  if(nums.length < 1) {
    return 0
  }
  if(nums.length === 1) {
    return nums[0];
  }
  let pre = nums[0];
  let now = Math.max(nums[0],nums[1]);
  for(let i = 2;i<nums.length;i++) {
    let temp = now;
    now = Math.max(pre + nums[i],now);
    pre = temp;
  }
  return now
};

const nums = [2,7,9,3,1];
console.log(rob(nums));