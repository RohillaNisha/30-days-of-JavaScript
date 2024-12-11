
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