currentId = 0;

updateCurrentId = function() {
    currentId += 1;
}

updateCurrentId();
console.log(currentId)

// does not update currentId defined globally
updateCurrentIdWithArg = function(currentId) {
    currentId += 1;
}

currentId = 0;

updateCurrentIdWithArg(currentId);
console.log(currentId)

// When you pass in the global currentId, JavaScript creates a copy of its 
// value (0) and assigns it to the parameter. Any modifications inside the 
// function happen to this local copy, not the global variable.
// This is called "pass by value" - JavaScript passes a copy of primitive 
// values (like numbers) to functions, not a reference to the original variable.

updateCurrentIdWithArg = function(currentId) {
    return currentId + 1;
}
currentId = updateCurrentIdWithArg(currentId);


// Objects are passed by reference
const counter = { currentId: 0 };
updateCurrentIdWithArg = function(obj) {
    obj.currentId += 1;  // This will modify the original object
}

// Updating using a clousure
// better encapsulation - the currentId variable can't be accessed directly from 
// outside, only through the methods you expose.
function createCounter() {
    let currentId = 0;
    
    function updateCurrentIdWithArg(id) {
        currentId = id + 1;
        return currentId;
    }

    return {
        getCurrentId: () => currentId,
        updateId: (id) => updateCurrentIdWithArg(id)
    };
}

// Usage:
const counterFromClousure = createCounter();
counterFromClousure.updateId(0);
console.log(counterFromClousure.getCurrentId()); // 1


// Updating using a class
class Counter {
    constructor() {
        this.currentId = 0;
    }
    
    updateCurrentIdWithArg(id) {
        this.currentId = id + 1;
        return this.currentId;
    }
}

// Usage:
const counter2 = new Counter();
counter2.updateCurrentIdWithArg(0);
console.log(counter2.currentId); // 1

// Updating using an object instance
const counter3 = {
    currentId: 0,
    updateCurrentIdWithArg(id) {
        this.currentId = id + 1;
        return this.currentId;
    }
};

// Usage:
counter3.updateCurrentIdWithArg(0);
console.log(counter3.currentId); // 1