// let myName = "Andrea"
// myName = 5

let myName: string = "Bob"

let numberOfWheels: number = 4;
let isStudent: boolean = false


// create new custom types
type Food = string
let favouriteFood: Food = "pizza"
let ages: number[] = [100, 101]
ages.push(true)

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}


let people: Person[] = [person1, person2]
let people2: Array<Person> = [person1, person2]


// Unions
type UserRole = "guest" | "member" | "admin"
type User = {
    username: string
    role: UserRole
}


let UserRole: UserRole = "member"

const users: User[] = [
    { username: "john_doe", role: "member"},
    { username: "jane_doe", role: "admin"},
    { username: "guest_user", role: "guest"}
]

function fetchUserDetails(username: string): User {
    const user = users.find(usr => usr.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

function updateUser(id: number, updates: any) {
   const foundUser = users.find(usr => usr.id === id)
   if (!foundUser) {
        console.error("User not found!")
        return
   }
   Object.assign(foundUser, updates)
}

// any: just if you need to "get around TS" during a transition to it
let value = 1
value.toUpperCase()