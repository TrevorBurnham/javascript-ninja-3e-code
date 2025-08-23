const fetchJson = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Status code ${response.status}`);
  }
  return response.json();
};

try {
  console.log(
    await fetchJson(
      "https://jsonplaceholder.typicode.com/posts/1",
    ),
  );
} catch (error) {
  console.error(`Request failed: ${error}`);
} finally {
  console.log("Request finished");
}
