export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    let value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}
