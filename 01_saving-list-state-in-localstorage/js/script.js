import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";

const listItems = getFromStorage(listKey);
createList(listItems);

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
  const itemValue = listInput.value.trim();

  if (itemValue.length >= 3) {
    const newItem = { id: Date.now(), item: itemValue };
    listInput.value = "";
    listInput.focus(); // send user back to the input
    listItems.push(newItem);
    createList(listItems); // create initial user input values
    saveToStorage(listKey, listItems); // save to local
  }
}


