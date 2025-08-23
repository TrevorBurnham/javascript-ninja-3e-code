async function* fetchPosts() {
  for (let i = 1; i <= 3; i++) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${i}`,
    );
    if (!response.ok) {
      throw new Error(`Status code ${response.status}`);
    }
    const json = await response.json();
    yield json;
  }
}

for await (const post of fetchPosts()) {
  console.log(post);
}
