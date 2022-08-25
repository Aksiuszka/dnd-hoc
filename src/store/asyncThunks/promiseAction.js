export default function promiseAction(callback, timeout) {
  return new Promise(resolve => {
    setTimeout(() => resolve(callback()), timeout);
  });
}
