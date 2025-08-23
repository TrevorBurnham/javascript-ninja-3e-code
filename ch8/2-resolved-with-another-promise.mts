const fulfilledPromise = Promise.resolve("fulfilled");
const rejectedPromise = Promise.reject(new Error("rejected"));

const promise1 = new Promise((resolve) => resolve(fulfilledPromise));
const promise2 = new Promise((resolve) => resolve(rejectedPromise));

promise1.then((value) => {
  console.log(`promise1 was fulfilled with value "${value}"`);
});
promise2.then(undefined, (reason) => {
  console.log(`promise2 was rejected with reason "${reason}"`);
});

const promise = new Promise((resolve) =>
  resolve({
    then: () => {},
  }),
);
