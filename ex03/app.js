// Example of synchronous and asynchronous behavior
console.log("1: Synchronous log");  // This is printed first because it is a regular synchronous console.log statement.

// Asynchronous function with setTimeout (0ms)

// Even though setTimeout is set to 0ms, its callback doesn't run immediately 
// because it’s asynchronous. The event loop ensures that all synchronous code 
// runs first, then asynchronous tasks (like the setTimeout callback) are 
// executed only when the call stack is clear.
setTimeout(() => { 
    console.log("3: Asynchronous log with 0ms delay");
}, 0);  // This will be put into the event queue

// Another synchronous log
console.log("2: Another synchronous log");  // This runs before the asynchronous log

// After the main thread (call stack) is empty, the event loop picks up the 
// asynchronous callback from setTimeout (which was waiting in the event queue) 
// and executes it, printing "3: Asynchronous log with 0ms delay" last.

// This is how JavaScript handles asynchronous operations even though it is 
// single-threaded—it doesn't block the execution of synchronous code while 
// waiting for asynchronous tasks to complete.