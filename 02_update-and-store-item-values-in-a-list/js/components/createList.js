export default function createList(listItems) {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    listItems.forEach(function (listItem) {
        listContainer.innerHTML += `<li><input type="text" value="${listItem.item}" data-id="${listItem.id}" /></li>`;
    });
}
