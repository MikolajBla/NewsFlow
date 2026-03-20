export const fetchNews = async (category = "all", page = 1) => {
  const response = await fetch(
    `/.netlify/functions/get-feed?category=${category}&page=${page}&limit=50`,
  );

  if (!response.ok) {
    throw new Error(`Web error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
