import { MessageSquareWarning } from "lucide-react";
import NewsCard from "./NewsCard";

function NewsList({ filteredNews }) {
  if (filteredNews.length > 0) {
    return filteredNews.map((news, i) => (
      <NewsCard
        key={news.article_id}
        category={news.category}
        source={news.source_name}
        title={news.title}
        summary={news.description}
        date={news.pubDate}
        imageUrl={news.image_url}
        featured={i % 4 === 0}
        url={news.link}
      />
    ));
  } else {
    return (
      <div className="col-span-3 flex flex-col items-center text-center">
        <h2 className="mb-2.5 flex gap-2 rounded-full border border-gray-300 bg-red-600 p-4 font-semibold text-gray-50">
          <MessageSquareWarning /> No news here
        </h2>
        <p className="w-50 text-gray-500">
          Select diffrent category or comeback later
        </p>
      </div>
    );
  }
}

export default NewsList;
