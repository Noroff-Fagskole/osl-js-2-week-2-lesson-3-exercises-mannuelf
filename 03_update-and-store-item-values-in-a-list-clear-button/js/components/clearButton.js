import createList from "./createList.js";

export default function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", clearList);

  function clearList() {
    if (confirm("Hey are you sure you want to do that?")) {
      localStorage.removeItem("list");
      createList([]);
    }
  }
}
