console.log("Starting 2-second timer...");
const sleep = async (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
await sleep(2_000);
console.log("Timer completed.");
