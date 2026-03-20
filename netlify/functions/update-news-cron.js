import { getStore } from "@netlify/blobs";

export default async () => {
  console.log("Starting CRON: Accumulating news...");

  try {
    const apiKey = process.env.VITE_NEWS_API_KEY;
    const response = await fetch(
      `https://newsdata.io/api/1/latest? 
        apikey=${apiKey}
        &language=en
        &category=business,health,science,technology,world
        &prioritydomain=top
        &image=1
        &removeduplicate=1`,
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const newData = await response.json();
    const newArticles = newData.results || [];

    const newsStore = getStore("news-cache");

    const existingData = await newsStore.get("latest-all", { type: "json" });
    const existingArticles = existingData?.results || [];

    let allArticles = [...newArticles, ...existingArticles];

    const uniqueArticles = Array.from(
      new Map(
        allArticles.map((article) => [article.article_id, article]),
      ).values(),
    );

    const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;

    const freshArticles = uniqueArticles.filter((article) => {
      const pubDate = new Date(article.pubDate).getTime();
      return pubDate > twentyFourHoursAgo;
    });

    await newsStore.setJSON("latest-all", {
      results: freshArticles,
      totalCount: freshArticles.length,
      lastUpdated: new Date().toISOString(),
    });

    console.log(
      `CRON Success: Saved ${freshArticles.length} articles (deleted older than 24h).`,
    );
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("CRON Error", error);
    return new Response("Error", { status: 500 });
  }
};

export const config = {
  schedule: "/15 * * * *",
};
