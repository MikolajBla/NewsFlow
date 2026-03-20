import CategoryBadge from "./CategoryBadge";
import ImageContainer from "./ImageContainer";

function NewsCard({
  category,
  source,
  title,
  summary,
  timeAgo,
  imageUrl,
  featured = false,
  url,
}) {
  return (
    <a
      href={url}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-50 ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
    >
      <ImageContainer imageUrl={imageUrl} featured={featured}>
        <CategoryBadge category={category} />
      </ImageContainer>

      <div className={`p-6 ${featured ? "space-y-4" : "space-y-3"} `}>
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium text-blue-400">{source}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400" />
          <span>{new Date(timeAgo).toLocaleDateString()}</span>
        </div>

        <h3
          className={`text-gray-900 transition-colors ${
            featured ? "text-2xl leading-tight" : "text-lg leading-tight"
          }`}
        >
          {title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
          {summary}
        </p>
      </div>
    </a>
  );
}

export default NewsCard;
