export default function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs = false;
  let savedThis = false;


  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = false;
        savedThis = false;
      }
    }, ms);
  }

  return wrapper;
}
