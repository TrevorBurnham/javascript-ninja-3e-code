const allPostsPromise = Promise.all(
  [
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/2"),
    fetch("https://jsonplaceholder.typicode.com/posts/3"),
  ].map((fetchPromise) =>
    fetchPromise.then((response) => {
      if (!response.ok) {
        throw new Error(`Status code ${response.status}`);
      }
      return response.json();
    }),
  ),
);

allPostsPromise
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post);
    });
  })
  .catch((reason) => {
    console.error(`Request failed: ${reason}`);
  });
