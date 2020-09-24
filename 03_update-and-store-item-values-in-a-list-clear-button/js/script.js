import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";
import clearBtn from "./components/clearButton.js";

export let listItems = getFromStorage(listKey);

console.log("global", listItems);
createList(listItems);
clearBtn();

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
    const itemValue = listInput.value.trim();

    if (itemValue.length >= 1) {
        const newItem = { id: Date.now(), item: itemValue };
        listInput.value = "";
        listInput.focus();
        listItems = getFromStorage(listKey);
        listItems.push(newItem);
        createList(listItems);
        saveToStorage(listKey, listItems);
    }

    console.log("addItem", listItems);
}
