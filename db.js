const drinks = [
    { id: 1, name: "Coffee" },
    { id: 2, name: "Matcha Tea" },
    { id: 3, name: "Black Chai" },
    { id: 4, name: "Milky Oolong Tea" },
    { id: 5, name: "Thai Tea" },
    { id: 6, name: "Mate Tea" }
];

const snacks = [
    { id: 1, name: "Beef Jerky" },
    { id: 2, name: "Protein Bar" },
    { id: 3, name: "Sriracha Coated Cashwes" },
    { id: 4, name: "Wasabi Coated Peanuts" },
    { id: 5, name: "Sunflower Seeds" }
];

async function getDrinkById(drinkId) {
    return drinks.find(drink => drink.id === drinkId);
};

async function getSnackById(snackId) {
    return snacks.find(snack => snack.id === snackId);
}

module.exports = { getDrinkById, getSnackById };