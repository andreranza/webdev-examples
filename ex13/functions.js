function multiply(num1, num2) {
    console.log(arguments);
    console.log(typeof arguments); // lacks some methods!
}
multiply(2, 2);


let course = {
    name: "JS for beginners",
    duration: "3 hours"
};
let newCourse = { ...course };
console.log(newCourse);

let courseUpdated = {
    name: "JS for beginners",
    duration: "3 hours"
};
let newCourseUpdated = { ...courseUpdated, name: "JS Pro" };
console.log(newCourseUpdated);

function multiplyy(multiplier, ...numbers) {
    return numbers.map(x => x * multiplier);
};
console.log( multiplyy(2, 1, 2, 3, 4));

const coursee = {
    name: "JS for beginners",
    duration: "3 hours",
    details() {
        return `${this.name} is ${this.duration}`;
    }
};
console.log(coursee.details())

const courseee = {
    name: "JS for beginners",
    duration: "3 hours",
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        let parts = value.split(" is ");
        this.name = parts[0];
        this.duration = parts[1];
    }
};

console.log(courseee.details);

course.details = "JS PRO is 10 hours";

console.log(course.details);

// try catch
const courseeee = {
    name: "JS for beginners",
    duration: "3 hours",
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        if (typeof value !== "string") {
            throw new Error(`Value, ${value} is not a string`);
        }
        let parts = value.split(" is ");
        this.name = parts[0];
        this.duration = parts[1];
    }
};

try {
    course.details = 42;
} catch (e) {
    console.log(`Caught an error: ${e.messages}`);
}

function displayVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

displayVar();

function displayLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

try {
    displayLet();
} catch (e) {
    console.log("let makes the 'for' a block level scope. use let!")
}

// this different in browser and node
function startVideo() {
    console.log(this);
}

startVideo();

const courseTwo = {
    name: "ES6 syntax",
    start: () => {
        console.log(this.name);
    } 
}
courseTwo.start() // undefined

function introduce(language) {
    console.log(this.name + " teaches " + language);
}

const instructor = { name: "Steven "};
const introduction = introduce.bind(instructor);
introduction("JavaScript");