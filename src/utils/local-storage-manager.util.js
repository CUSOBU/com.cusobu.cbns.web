export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const getInLocalStorage = (key) => {
  const result = localStorage.getItem(key);
  return !!result && JSON.parse(result);
};

export const clearLocalStorageKey = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
