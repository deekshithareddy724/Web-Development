// Get references to elements
const addButton = document.getElementById('addButton');
const myList = document.getElementById('myList');

// Function to add a new item
function addNewItem() {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  newItem.className = 'item'; // optional: keep the same class
  myList.appendChild(newItem);
}

// Function to remove an item when clicked
function removeItem(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
}

// Attach event listeners
addButton.addEventListener('click', addNewItem);
myList.addEventListener('click', removeItem);
