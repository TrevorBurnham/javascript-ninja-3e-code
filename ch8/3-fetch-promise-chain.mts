fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status code ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((reason) => {
    console.error(`Request failed: ${reason}`);
  })
  .finally(() => {
    console.log("Request finished");
  });
