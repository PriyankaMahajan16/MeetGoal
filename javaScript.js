var addButton = document.querySelector('#item1');
var itemInput = document.querySelector('#new-item-input');
var defaultInput = document.querySelector('#home-collapse');

// Function to add a new item to the end of the list
function addNewItemToEnd() {
    if(itemInput.style.visibility=="visible")
    {
        itemInput.style.visibility="hidden";
        return;
    }
    itemInput.style.visibility="visible";
  }

// Optional: Add an event listener for the Enter key in the input field
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') 
        {
        // Get the value from the input field
        var newItemValue = itemInput.value.trim(); 

        var list = document.querySelector('#ul1');
        var newItem = document.createElement('li');
        newItem.textContent = newItemValue;
        list.appendChild(newItem);
    
        addButton.classList.remove("collapsed");
        defaultInput.classList.add("show");
    }});

// Add an event listener to the 'Add Item' button
//addButton.addEventListener('onclick', addNewItemToEnd('MangoAdded'));