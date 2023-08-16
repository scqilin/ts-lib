import './style.css'
// 算法题解 leetcode
// 1 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const num2 = target - num
        if(map.has(num2)) {
            return [map.get(num2), i]
        } else {
            map.set(num, i)
        }
    }
    return []
};

// 根据题号 返回对应的算法函数 默认返回空函数
/**
 * @param {number} num
 * @return {function}
 * @example getAlgoFunc(1) => twoSum twoSum([2, 7, 11, 15], 9) => [0, 1]
 * @example getAlgoFunc(2) => () => {console.log('no func')}  // 没有对应的算法函数
 */
const getAlgoFunc = (num: number) => {
    switch(num) {
        case 1: return twoSum
    }
    return () => {console.log('no func')}
}
// 测试
// let sumfn = getAlgoFunc(1)
// console.log(sumfn([2, 7, 11, 15], 9))
export default getAlgoFunc