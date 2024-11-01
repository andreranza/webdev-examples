// const numbers = [2, 4, 6]

// const areAllEven = numbers.every(x => x % 2 === 0 )
// console.log(`areAllEven: ${areAllEven}`)

// const numbers = [1, 3, 6]
// const hasOneEvenNumber = numbers.some(x => x % 2 === 0 )
// console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(`evenNumber: ${evenNumbers}`);

const employees = [
    { id: 1, nm: "Alice", role: "dev"},
    { id: 2, nm: "Bob", role: "dev"},
    { id: 3, nm: "Charlie", role: "designer"},
    { id: 4, nm: "Danielle", role: "manager"},
];

const devs = employees.filter(x => x.role === "dev"); // creates a new array
console.log(devs);

const numbs = [2, 4, 6, 8, 10];
const squareNumbs = numbs.map(x => x * x);
console.log(squareNumbs);

const chars = ["a", "b", "c"];
const upperCaseChars = chars.map(x => x.toUpperCase());
console.log(upperCaseChars);

// const charss = ["a", "b", "c"];
// console.log(charss.toUpperCase());


const ppl = [
    { id: 1, nm: "Alice", email: "aLIce@gmail.com"},
    { id: 2, nm: "Bob", email: "bob@gMAil.com"},
    { id: 3, nm: "Joe", email: "Joe@gmail.Com"}
];

const updatedPpl = ppl.map(x => ({
    ...x,
    email: x.email.toLowerCase()
}));
console.log(updatedPpl);

const numbb = [1, 10, 5, 14];
// let sum = 0;

// for (const num of numbb)
//     sum += num;

// console.log(`Total sum: ${sum}`);

// const sum = numbb.reduce((accumulator, currentVal) => {
//     return accumulator + currentVal;
// }, 0); // index of the starting value

// console.log(`Total sum: ${sum}`);

const sum = numbb.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log(`Total sum: ${sum}`);