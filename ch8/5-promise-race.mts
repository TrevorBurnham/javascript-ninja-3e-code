const fetchController = new AbortController();

const fetchPromise = fetch("https://httpbin.org/delay/2", {
  signal: fetchController.signal,
}).then((response) => {
  if (!response.ok) {
    throw new Error(`Status code ${response.status}`);
  }
  return response.json();
});

const timeoutPromise = new Promise((_, reject) =>
  setTimeout(() => {
    fetchController.abort();
    reject(new Error("Request timeout"));
  }, 1_000),
);

Promise.race([fetchPromise, timeoutPromise])
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    console.error(`Request failed: ${reason}`);
  });
