const drinks = [
    { id: 1, name: "Coffee" },
    { id: 2, name: "Matcha Tea" },
    { id: 3, name: "Black Chai" },
    { id: 4, name: "Milky Oolong Tea" },
    { id: 5, name: "Thai Tea" },
    { id: 6, name: "Mate Tea" }
];

let drinksCount = drinks.length;

const snacks = [
    { id: 1, name: "Beef Jerky" },
    { id: 2, name: "Protein Bar" },
    { id: 3, name: "Sriracha Coated Cashwes" },
    { id: 4, name: "Wasabi Coated Peanuts" },
    { id: 5, name: "Sunflower Seeds" }
];

let snacksCount = snacks.length;

const links = [
    { href: "/", text: "Home" },
];

async function getDrinkById(drinkId) {
    return drinks.find(drink => drink.id === drinkId);
};

async function getSnackById(snackId) {
    return snacks.find(snack => snack.id === snackId);
}

function getAllDrinks() {
    return drinks;
}

function getAllSnacks() {
    return snacks;
}

function getAllLinks() {
    return links;
}

function addDrink({ name }) {
    drinksCount++;
    const drink = { id: drinksCount, name: name };
    drinks.push(drink);
}

async function updateDrink(id, name) {
    let drink = await getDrinkById(Number(id));
    drink.id = Number(id);
    drink.name = name;
}

async function deleteDrink(id) {
    let drink = await getDrinkById(Number(id));
    const index = drinks.indexOf(drink);
    if (index > -1) {
        drinks.splice(index, 1);
    }
}

function addSnack({ name }) {
    snacksCount++;
    const snack = { id: snacksCount, name: name };
    snacks.push(snack);
}

async function updateSnack(id, name) {
    let snack = await getSnackById(Number(id));
    snack.id = Number(id);
    snack.name = name;
}

async function deleteSnack(id) {
    let snack = await getSnackById(Number(id));
    const index = snacks.indexOf(snack);
    if (index > -1) {
        snacks.splice(index, 1);
    }
}

module.exports = { 
    getDrinkById, 
    getSnackById,
    getAllDrinks,
    getAllSnacks,
    getAllLinks,
    addDrink,
    updateDrink,
    deleteDrink,
    addSnack,
    updateSnack,
    deleteSnack
};