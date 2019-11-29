var remindersList = [];

// Get the list if exists from localStorage
function getRemindersList() {
    const reminders = localStorage.getItem('remindersList');
    if (reminders != null) {
        remindersList = JSON.parse(reminders);
    }
    return remindersList;
}

// Adding an item to the list
function addItemToList() {

    var content = document.getElementById("addItem").value;
    const item = {
        content,
        done: false,
        id: Date.now(),
    };

    console.log(item);

    const reminders = getRemindersList();
    if (content != "") {
        reminders.push(item);
        document.getElementById("addItemForm").reset();
        console.log(reminders);
        appendOutput(item);
    }
    // Add to localStorage
    localStorage.setItem('remindersList', JSON.stringify(reminders));
}

function appendOutput(item) {
    //var newLi = document.createElement('li');
    //newLi.setAttribute("id", value.replace(/\s+/g, ''));
    //newLi.setAttribute("onclick", "removeItemFromList(this)");
    //newLi.appendChild(document.createTextNode(value));
    //listItems.append(newLi);

    // Create a new HTML element and append it to the DOM

    //<input id="${item.id}" type="checkbox" />
    //<label for="${item.id}" class="checked"></label>

    const listItems = document.getElementById("listItems");

    listItems.insertAdjacentHTML('beforeend', `
        <li class="reminder-item" id="${item.id}">
            
                <input type="checkbox" onclick="toggleItemDone(this)"/>
                <span onclick="toggleItemDone(this)">${item.content}</span>
                <button class="delete-item" onclick="removeItemFromList(${item.id})">Delete</button>
            
        </li>
            `);
}

// Listener in the items list
//const ulList = document.getElementById("listItems");
//ulList.addEventListener("click", removeItemFromList, false);

// Remove an item from the list
function removeItemFromList(id) {
    var target = document.getElementById(id);

    let reminders = getRemindersList();
    reminders = reminders.filter(item => item.id != id);
    // Add to localStorage
    localStorage.setItem('remindersList', JSON.stringify(reminders));

    // Remove the element
    target.parentNode.removeChild(target);

    console.log(reminders);
}

// Delete the list and clear the content on the page
function deleteList() {

    let reminders = getRemindersList();
    reminders.length = 0;
    // Add to localStorage
    localStorage.setItem('remindersList', JSON.stringify(reminders));

    // Remove the elements
    while (listItems.firstChild != null) {
        listItems.removeChild(listItems.firstChild);
    }
    console.log(remindersList);
}

// Class toggler for the element
function toggleItemDone(elem) {
    elem.parentElement.classList.toggle("itemDone");
}

 //Show the existing items from localStorage
function show() {
    let reminders = getRemindersList();
    reminders.forEach(item => appendOutput(item));
    console.log(reminders);
}