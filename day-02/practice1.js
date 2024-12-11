
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    currentValue = init;

return obj = {
     increment: function(){
        return currentValue += 1;
    },

     decrement: function(){
        return currentValue -= 1;
    
    },

     reset: function(){
        currentValue = init;
        return init;
    }
}
    
};




 const counter = createCounter(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4
 

//  Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

//  The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 
//  Please solve it without the built-in Array.map method.
 
  
 
//  Example 1:
 
//  Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
//  Output: [2,3,4]
//  Explanation:
//  const newArray = map(arr, plusone); // [2,3,4]
//  The function increases each value in the array by one. 
//  Example 2:
 
//  Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
//  Output: [1,3,5]
//  Explanation: The function increases each value by the index it resides in.
//  Example 3:
 
//  Input: arr = [10,20,30], fn = function constant() { return 42; }
//  Output: [42,42,42]
//  Explanation: The function always returns 42.
  
 



 /**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let answer = [] ;
    for( let i=0 ; i<arr.length ; i++){

        answer.push(fn(arr[i],i));
    }

    return answer;
    
};


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out
 


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let answerArray = [];
    for( let i= 0 ; i < arr.length; i++){
        if(fn(arr[i], i)){
            answerArray.push(arr[i])
        }
    }
    return answerArray;

    
};

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

 

// Example 1:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.
// Example 2:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.
// Example 3:

// Input: 
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.
 



/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accum= init;
    if (nums.length == 0) return init;
    for(let i=0; i< nums.length; i++){

        accum = fn(accum, nums[i]);

    }
    return accum;
};