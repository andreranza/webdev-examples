const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Carciofi", price: 10 },
    { name: "Veggie", price: 8 },
]

const cashInRegister = 100;
const orderQueque = [];
const nextOrderId = 1;

// write utility "addNewPizza" 

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

// console.log(menu);

// placeOrder
// 1 find pizza in the menu
// 2 adds the income to the cash register
// 3 pushes a new "order object" to the order queque
// 4 returns the new order object (just in case we need it later)

function updateId(currentId) {
    return currentId + 1
}

placeOrder = function(pizzaName) {
    const choosenPizza = menu.find(x => x.name === pizzaName);
    cashInRegister += choosenPizza.price;
    const current_id = updateId(current_id);
    const newOrder = { id: nextOrderId++, pizza: pizzaName, status: "ordered" };
    orderQueque.push(newOrder);
    return newOrder;
}

// completeOrder
// takes order id string as a param
// finds the correct order in the orderQueque
// marks the status as completed instead of ordered
// return the found order from the function
// modify placeOrder so that it takes an Id
// needs nextOrderId variable

completeOrder = function(orderId) {
    const order = orderQueque.find(order => order.id == orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Capricciosa", cost: 12 });
addNewPizza({ name: "Napoli", cost: 8 });

placeOrder("Capricciosa");
completeOrder("1");

console.log("Menu: ", menu)
console.log("cash: ", cashInRegister);
console.log("order queque:", orderQueque);
