function addItem() {
    var item = document.getElementById("item").value;
    if (item === "") {
        alert("Please enter an item!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = item + ' <button class="delete-btn" onclick="deleteItem(this)">Delete</button>';
    document.getElementById("list").appendChild(listItem);

    document.getElementById("item").value = "";
}

function deleteItem(item) {
    item.parentNode.remove();
}
