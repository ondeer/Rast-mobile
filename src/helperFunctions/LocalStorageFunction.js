export const getLocalStorage = (localStorageName) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(localStorageName);
  }
};
export const setLocalStorage = (localStorageName, data) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(localStorageName, JSON.stringify(data));
  }
};
