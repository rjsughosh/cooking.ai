// Dishes categorized into three groups
const riceDishes = [
    "Fried Rice",
    "Veg Dum Biryani",
    "Rice Pulao (Green)",
    "Lemon Rice",
    "Puliyogre",
    "Rice Majjige huli",
    "Tomato Rice",
    "Mexican rice and beans",
    "Yellow Thai churry",
    "Red Thai curry",
    "Rice Sambar",
    "Rice Saaru",
    "Vangi Bhaat",
    "Tawa Palav",
    "Rice Daal",
    "Rice Palak daal",
    "Rice Bendekai gojju",
    "Jeera rice",
    "Rice and Chole",
    "Bise bele bhaat",
];

const chapathiDishes = [
    "Coyote Squash palya",
    "Beetroo palya",
    "Cabbage palya",
    "Cauliflower palya (dry/gravy)",
    "Aloo palya (dry/gravy)",
    "Kofta curry",
    "Yennegai palya",
    "Saagu",
    "Egg curry",
    "Egg bhurji",
    "Aloo gobi",
    "Mushroom gravy",
    "Chana masala gravy",
    "Potato dry",
    "Egg shakshuka",
];

const otherDishes = [
    "White Pasta",
    "Red Pasta",
    "Vada pav",
    "Pav bhaji",
    "Goli baje",
    "Onion pakoda",
    "Idli Vada",
    "Masala dosa",
    "Godi dosa",
    "American chopseuy",
    "Aloo parota",
];

// Function to choose a random dish from a given category
function chooseDish(category) {
    console.log("category",category)
    let selectedDish;
    if (category.length > 0) {
        const randomIndex = Math.floor(Math.random() * category.length);
        selectedDish = category[randomIndex];
    console.log("selectedDish",selectedDish)

    } else {
        selectedDish = 'No dishes available to choose from.';
    }
    document.getElementById('result').textContent = `How about: ${selectedDish}?`;
}

// Event listeners for each category button
document.getElementById('riceButton').addEventListener('click', () => chooseDish(riceDishes));
document.getElementById('chapathiButton').addEventListener('click', () => chooseDish(chapathiDishes));
document.getElementById('otherButton').addEventListener('click', () => chooseDish(otherDishes));


// Modal functionality
const modal = document.getElementById('dishModal');
const dishList = document.getElementById('dishList');
const closeModal = document.querySelector('.close');

// Function to open the modal with a list of dishes
function openModal(category, categoryName) {
    dishList.innerHTML = ''; // Clear the list
    category.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.textContent = dish;
        dishList.appendChild(listItem);
    });
    modal.style.display = 'flex'; // Show the modal
}

function viewAll(category){
    openModal(category, "All Dishes")
}

// Event listeners for each category button
document.getElementById('riceViewAllButton').addEventListener('click', () => viewAll(riceDishes));
document.getElementById('chapathiViewAllButton').addEventListener('click', () => viewAll(chapathiDishes));
document.getElementById('otherViewAllButton').addEventListener('click', () => viewAll(otherDishes));


// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});