var remindMeList = [];

// Adding an item to the list
function addItemToList() {
    //const content = document.getElementById("addItem").value;
    //const item = {
    //    content,
    //    done: false,
    //    id: Date.now(),
    //};
    //remindMeList.push(item);
    //console.log(remindMeList);

    //// Insert a li with the reminder item
    //const listItems = document.getElementById("listItems");
    //listItems.insertAdjacentHTML('beforeend', `
    //    <li class="reminder-item" data-key="${item.id}">
    //        <input id="${item.id}" type="checkbox" />
    //        <label for="${item.id}" class="checked"></label>
    //        <span>${item.content}</span>
    //        <button class="delete-item">
    //            <svg><use href="#delete-icon"></use></svg>
    //        </button>
    //    </li>
    //        `);
    //console.log(listItems);


    var content = document.getElementById("addItem").value;
    const item = {
        content,
        done: false,
        id: Date.now(),
    };
    var listItems = document.getElementById("listItems");

    // Create a new HTML element and append it to the DOM
    function appendOutput(item) {
        //var newLi = document.createElement('li');
        //newLi.setAttribute("id", value.replace(/\s+/g, ''));
        //newLi.setAttribute("onclick", "removeItemFromList(this)");
        //newLi.appendChild(document.createTextNode(value));
        //listItems.append(newLi);

    listItems.insertAdjacentHTML('beforeend', `
        <li class="reminder-item" data-key="${item.id}" id="${item.id}" onclick="removeItemFromList(this)">
            <input id="${item.id}" type="checkbox" />
            <label for="${item.id}" class="checked"></label>
            <span>${item.content}</span>
            <button class="delete-item">
                <svg><use href="#delete-icon"></use></svg>
            </button>
        </li>
            `);

    }

    if (content != "") {
        remindMeList.push(item);
        document.getElementById("addItemForm").reset();
        console.log(remindMeList);
        appendOutput(item);
    }
    return false;
}

// Listener in the items list
//const ulList = document.getElementById("listItems");
//ulList.addEventListener("click", removeItemFromList, false);

// Remove an item from the list
function removeItemFromList(elem) {
    var target = document.getElementById(elem.id);
    console.log(target);
    var index = remindMeList.indexOf(elem.id);
    if (index > -1) {
        remindMeList.splice(index, 1)
    }
    target.parentNode.removeChild(target);
    console.log(remindMeList);
}

// Delete the list and clear the content on the page
function deleteList() {
    remindMeList.length = 0;
    while (listItems.firstChild != null) {
        listItems.removeChild(listItems.firstChild);
    }
    console.log(remindMeList);
}
