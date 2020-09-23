import { listKey } from "../settings.js";
import { saveToStorage } from "../utils/storage.js";

export default function createList(listItems) {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function (listItem) {
        listContainer.innerHTML += `<li><input type="text" value="${listItem.item}" data-id="${listItem.id}" /></li>`;
    });

    const textboxes = document.querySelectorAll("li input[type=text]");

    textboxes.forEach(function (textbox) {
        textbox.addEventListener("keyup", updateValue);
    });

    function updateValue(event) {
        const id = event.target.dataset.id;
        const value = event.target.value.trim();

        const updatedList = updateValueInList(listItems, id, value);
        saveToStorage(listKey, updatedList);
        console.log(updatedList);
    }
}

function updateValueInList(listItems, id, value) {
    const itemIndex = listItems.findIndex((item) => item.id === parseInt(id));

    listItems[itemIndex].item = value;

    return listItems;
}
