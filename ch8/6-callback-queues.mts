setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve(true).then(() => {
  console.log("then callback");
});

console.log("end of script");
