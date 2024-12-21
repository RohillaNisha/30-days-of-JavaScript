// 1.  Write a function createHelloWorld. It should return a new function that always returns "Hello World".
    
//     Example 1:
//     Input: args = []
//     Output: "Hello World"
//     Explanation:
//     const f = createHelloWorld();
//     f(); // "Hello World"

//     The function returned by createHelloWorld should always return "Hello World".


var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};



// 2. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

//  Input: 
//  n = 10 
//  ["call","call","call"]
//  Output: [10,11,12]
//  Explanation: 
//  counter() = 10 // The first time counter() is called, it returns n.
//  counter() = 11 // Returns 1 more than the previous time.
//  counter() = 12 // Returns 1 more than the previous time.

let count = 0;
var createCounter = function(n) {
    
    return function() {
     return n++;
        
        
    };
   
};

// 3. Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.



var expect = function(val) {

    var toBe = function(val2){
 
         if(val2 !== val){
             throw new Error('Not Equal');
         }
 
         return true;
         
     }
 
    var notToBe = function(val2){
  
         if(val2 === val){
             throw new Error('Equal');
         }
 
         return true;
     }
 
     return{
         toBe: toBe,
         notToBe: notToBe
     }
 
 
     
 };
 