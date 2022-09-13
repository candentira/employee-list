export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, delay) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) {
      return;
    }
    func(...args);
    shouldWait = true;
    setTimeout(() => { shouldWait = false; }, delay);
  };
};
