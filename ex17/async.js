const promise = new Promise((resolve, reject) => {
    const allWentWell = true;

    if (allWentWell) {
        resolve("All things went well")
    } else {
        reject("Oops something went wrong!")
    }
});

console.log(promise);

const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well done!")
        } else {
            reject("Ooops! you guessed wrong! Unluckly.")
        }
    }, 2000)
})

console.log(promise2);

// how to consume the promise?

promise2.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

const promiseOne = new Promise((resolve, reject) => {
    resolve("Well Done! Promise one is resolved.")
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve("Well Done! Promise two is resolved")
});

const promiseThree = new Promise((resolve, reject) => {
    reject("Promise three is rejected. Unlucky!")
});

promiseOne.then((value) => {
    console.log(value)
    return promiseTwo
}).then((value) => {
    console.log(value)
    return promiseThree
}).catch((error) => {
    console.log(error)
})