import { listKey } from "../settings.js";
import { saveToStorage } from "../utils/storage.js";

export default function createList(listItems) {
  const listContainer = document.querySelector("ul");
  listContainer.innerHTML = " ";

  console.log("listItems", listItems);

  listItems.forEach(listItem => {
    console.log("listItem", listItem);
    let checked = "";
    if (listItem.complete) {
      checked = "checked";
    }

    listContainer.innerHTML += `
      <li>
        <span class="${checked}">${listItem.item}</span>
        <input ${checked} type="checkbox" data-id="${listItem.id}" />
      </li>
    `;
  })

  let checkBoxes = document.querySelectorAll("li input");
  checkBoxes.forEach(box => {
    box.addEventListener("click", toggleComplete);
  })
  // toggleComplete
  function toggleComplete(e) {
    const id = e.target.dataset.id;
    let checkedItem = e.target.checked; // true or false
    /// update the list items
    const updatedList = updateList(listItems, id, checkedItem);

    saveToStorage(listKey, updatedList);  // save to storage
    createList(updatedList);  // create a new list the updated list items
  }
}
function updateList(listItems, id, checked) {
  // lookedup, find the item by id, findIndex()
  const thisItemIndex = listItems.findIndex(item => {
    if (item.id === parseInt(id)) {
      return true;
    }
  })
  // creating a new property called "complete"
  listItems[thisItemIndex].complete = checked;

  return listItems;
}
