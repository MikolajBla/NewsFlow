import { getStore } from "@netlify/blobs";

export default async (req) => {
  try {
    const newsStore = getStore("news-cache");
    const data = await newsStore.get("latest-all", { type: "json" });

    if (!data || !data.results) {
      return new Response(JSON.stringify({ message: "No data" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const url = new URL(req.url);
    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "50";
    const category = url.searchParams.get("category") || "all";

    let filteredNews = data.results;

    if (category !== "all") {
      filteredNews = filteredNews.filter(
        (news) =>
          news.category &&
          news.category[0].toLowerCase() === category.toLowerCase(),
      );
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    return new Response(
      JSON.stringify({
        results: paginatedNews,
        total: filteredNews.length,
        currentPage: pageNum,
        totalPages: Math.ceil(filteredNews.length / limitNum),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
