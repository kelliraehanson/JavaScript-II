// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myName(name) {
  const nameHolder = name;
  console.log(`My name is ${name}.`);
  
  function greeting() {
    const greetingSaying = "Hi, how are you?";
    console.log(`${greetingSaying} My name is ${nameHolder}.`);
    
    function other() {
      const otherGreeting = "Hello. Hi. My name is"
      console.log(`${otherGreeting} ${nameHolder}. What is yours?`);
      
    }
    
    other();
    
  }
  greeting();
}

myName("Kelli");


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counterName = 0;
  return() => ++counterName;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it. hi
};
