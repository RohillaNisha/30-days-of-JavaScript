
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

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function
 



/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length == 0){
        return function(x){
            return x;
        };
    }
    else{
        return function(x) {
        let result = x;
        for(let i = functions.length -1 ; i >= 0; i--){
            result = functions[i](result)
    }
    return result;
    }

    }
   
    
};



// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true


function CodelandUsernameValidation(str) { 

    // code goes here  
  if(str.length < 4 || str.length > 25){
    return false;
  }
  
  
  if(str.charAt(str.length -1) === '_'){
    return false;
  }
  
  
  if(! /^[A-Za-z]+$/.test(str.charAt(0)))
    return false; 
  
  for(let i=0 ; i< str.length ; i++){
    if ( /^[A-Za-z]+$/.test(str.charAt(i)) || /\d/.test(str.charAt(i)) || str.charAt(i) === '_'){
      return true;
    }
    return false;
  } 
  return true;
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));


//   Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10



function FindIntersection(strArr) { 

    let element1 = strArr[0].split(", ");
    let element2 = strArr[1].split(", ");
    let joinArray = [];
  
    for(let i=0 ; i< element1.length; i++){
      if (element2.includes(element1[i])){
        joinArray.push(element1[i]);
  
      }
      
    }
  
    let answer = joinArray.toString();
    return answer; 
    }
    // code goes here  
  
     
  // keep this function call here 
  console.log(FindIntersection(readline()));


//   Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true

function QuestionsMarks(str) { 
    let numberArray = [];
    let indexOfNumbersArray = [];
    let numberOfQuestionMarks = 0;
     
    for(i=0; i< str.length ; i++){
      if( /\d/.test(str.charAt(i)) === true){
        numberArray.push(str[i])
        indexOfNumbersArray.push(i)
      }
    
    }
    
    for(j=0; j< numberArray.length ; j++) {
      
      if(parseInt(numberArray[j])+ parseInt(numberArray[j+1]) === 10)
      {
       
        for(k=indexOfNumbersArray[j]; k=indexOfNumbersArray[j+1]; k++ ){
            if(str.charAt(k) === '?'){
              numberOfQuestionMarks += 1;
            }
            
           if(numberOfQuestionMarks === 3){
             return true;
            }
        }
    
      }
      return false;
    
    }
    
    
    }
       
    // keep this function call here 
    console.log(QuestionsMarks(readline()));


//     First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I


function FirstReverse(str) { 

    let outputStringArray = [];
  
    for(i=str.length-1 ; i>=0 ; i--){
      outputStringArray.push(str.charAt(i));
    }
  
  
    // code goes here  
    return outputStringArray.join(""); 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));


//   First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320



function FirstFactorial(num) { 

    // code goes here   
    for(let i= num-1; i >=1 ; i--){
      num = num * i
    }
  
    return num; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));

//   Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love


function LongestWord(sen) { 
    let regX = /[A-Za-z]/g;
    let words = sen.split(" ");
    let maxLength = 0;
    let longestWord;
    
    let cleanWords = words.map((word) => (word.match(regX)).join(""));
  
    for(let i=0 ; i< cleanWords.length ; i++){
      if( cleanWords[i].length > maxLength){
        maxLength = cleanWords[i].length;
        longestWord = cleanWords[i];
      }  
  
    }
    return longestWord;
  
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));



//   React Button Toggle
// We provided some simple React template code. Your goal is to modify the component so that you can properly toggle the button to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa. Make use of component state for this challenge.

// You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they are. Submit your code once it is complete and our system will validate your output.


import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
const [buttonState, setButtonState] = useState(true);
  function handleClick() {
    setButtonState(!buttonState);

    // todo
  }
  
  return (
    <button onClick={handleClick}> {buttonState ? "ON" : "OFF"}</button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);



// Write a function argumentsLength that returns the count of arguments passed to it.
 

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
 

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
  return args.length;
};

/**
* argumentsLength(1, 2, 3); // 3
*/