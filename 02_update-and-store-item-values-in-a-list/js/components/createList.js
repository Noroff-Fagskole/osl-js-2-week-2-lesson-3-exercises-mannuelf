import { listKey } from "../settings.js";
import { saveToStorage } from "../utils/storage.js";

export default function createList(listItems) {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function (listItem) {
        listContainer.innerHTML += `
          <li>
            <input
              type="text"
              value="${listItem.item}"
              data-id="${listItem.id}" />
          </li>`;
    });

    const textBoxes = document.querySelectorAll("li input[type=text]");
    textBoxes.forEach(textBox => {
      textBox.addEventListener("keyup", updateValue);
    });

    function updateValue(e) {
      const id = e.target.dataset.id; // id
      const value = e.target.value.trim(); // value
      // find and update a given list item
      const updatedList = updateValueInList(listItems, id, value);
      saveToStorage(listKey, updatedList);
    }
}

function updateValueInList(listItems, id, value) {
  const itemIndex = listItems.findIndex(item => {
    if (item.id === parseInt(id)) {
      return true;
    }
  })
  listItems[itemIndex].item = value;
  return listItems;
}
