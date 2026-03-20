export const fetchNews = async () => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const url = `https://newsdata.io/api/1/latest?
  apikey=${apiKey}
  &language=en
  &category=world,business,health,technology,science
  &image=1
  &removeduplicate=1`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Web error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
