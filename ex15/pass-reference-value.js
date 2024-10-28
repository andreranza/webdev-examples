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