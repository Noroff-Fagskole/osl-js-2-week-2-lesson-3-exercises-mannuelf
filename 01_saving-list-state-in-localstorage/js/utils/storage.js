// saveToStorage
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// getFromStorage
export function getFromStorage(key) {
  const value = localStorage.getItem(key);
  console.log("getFromStorage", value);
  if (!value) {
    return [];
  }
  return JSON.parse(value);
}
