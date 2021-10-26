const itemList = document.getElementById('items');
const form = document.getElementById('addForm');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create new li element
  const li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  const deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append del button to li
  li.appendChild(deleteBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
