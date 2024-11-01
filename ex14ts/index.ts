type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister: number = 100;
let orderQueque: Order[] = [];
let nextOrderId: number = 1;
let nextPizzaId: number = 1;

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Carciofi", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 8 },
]



function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order | undefined {
    const choosenPizza = menu.find(x => x.name === pizzaName);
    if (!choosenPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += choosenPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: choosenPizza, status: "ordered" };
    orderQueque.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order {
    const order = orderQueque.find(order => order.id == orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueque`)
        throw new Error
    }
    order.status = "completed"
    return order
}

addNewPizza({ name: "Capricciosa", price: 12 });
addNewPizza({ name: "Napoli", price: 8 });

placeOrder("Capricciosa");
completeOrder(1);

console.log("Menu: ", menu)
console.log("cash: ", cashInRegister);
console.log("order queque:", orderQueque);

export function getPizzaDetail (identifier: string | number ): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}