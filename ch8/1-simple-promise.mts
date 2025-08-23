const timerPromise = new Promise((resolve) => {
  setTimeout(resolve, 1_000);
});

timerPromise.then(() => {
  console.log("One second has elapsed");
});
