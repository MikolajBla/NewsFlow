import Nav from "./components/Nav";
import NewsCard from "./components/NewsCard";

const newsData = [
  {
    id: "b961dade95c55b7f949ccd8e0234a356",
    title: "M5 chip leak reveals Apple has big gains coming in key area",
    category: "technology",
    description:
      "Apple’s forthcoming M5 chip has seemingly leaked as part of a new iPad Pro hardware leak. Here’s what its performance looks like in testing.",
    content:
      "Today, Apple’s as-yet-unannounced M5 iPad Pro was seemingly leaked by the same YouTuber who last year leaked the M4 MacBook Pro. Thanks to the surprise reveal, we now have benchmarks for Apple’s forthcoming M5 chip, and they point to big gains coming... [1862 chars]",
    url: "https://9to5mac.com/2025/09/30/m5-chip-leak-reveals-apple-has-big-gains-coming-in-key-area/",
    image:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/12/M5-Pro-chip-could-separate-CPU-and-GPU-in-server-grade-chips.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2025-09-30T19:38:25Z",
    lang: "en",
    source: {
      id: "92f73865e835e33ed68c11447777c939",
      name: "9to5Mac",
      url: "https://9to5mac.com",
      country: "us",
    },
    featured: true,
  },
  {
    id: "b961dade95c55b7f949ccd8e0234a356",
    title: "M5 chip leak reveals Apple has big gains coming in key area",
    category: "technology",
    description:
      "Apple’s forthcoming M5 chip has seemingly leaked as part of a new iPad Pro hardware leak. Here’s what its performance looks like in testing.",
    content:
      "Today, Apple’s as-yet-unannounced M5 iPad Pro was seemingly leaked by the same YouTuber who last year leaked the M4 MacBook Pro. Thanks to the surprise reveal, we now have benchmarks for Apple’s forthcoming M5 chip, and they point to big gains coming... [1862 chars]",
    url: "https://9to5mac.com/2025/09/30/m5-chip-leak-reveals-apple-has-big-gains-coming-in-key-area/",
    image:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/12/M5-Pro-chip-could-separate-CPU-and-GPU-in-server-grade-chips.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2025-09-30T19:38:25Z",
    lang: "en",
    source: {
      id: "92f73865e835e33ed68c11447777c939",
      name: "9to5Mac",
      url: "https://9to5mac.com",
      country: "us",
    },
  },
  {
    id: "b961dade95c55b7f949ccd8e0234a356",
    title: "M5 chip leak reveals Apple has big gains coming in key area",
    category: "technology",
    description:
      "Apple’s forthcoming M5 chip has seemingly leaked as part of a new iPad Pro hardware leak. Here’s what its performance looks like in testing.",
    content:
      "Today, Apple’s as-yet-unannounced M5 iPad Pro was seemingly leaked by the same YouTuber who last year leaked the M4 MacBook Pro. Thanks to the surprise reveal, we now have benchmarks for Apple’s forthcoming M5 chip, and they point to big gains coming... [1862 chars]",
    url: "https://9to5mac.com/2025/09/30/m5-chip-leak-reveals-apple-has-big-gains-coming-in-key-area/",
    image:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/12/M5-Pro-chip-could-separate-CPU-and-GPU-in-server-grade-chips.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2025-09-30T19:38:25Z",
    lang: "en",
    source: {
      id: "92f73865e835e33ed68c11447777c939",
      name: "9to5Mac",
      url: "https://9to5mac.com",
      country: "us",
    },
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden md:flex md:overflow-visible">
      <Nav></Nav>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-8">
          <div className="flex auto-rows-auto flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((news) => (
              <NewsCard
                key={news.id}
                category={news.category}
                source={news.source.name}
                title={news.title}
                summary={news.description}
                timeAgo={news.publishedAt}
                imageUrl={news.image}
                featured={news.featured}
                url={news.source.url}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
