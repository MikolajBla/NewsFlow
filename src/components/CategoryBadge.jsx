function CategoryBadge({ category }) {
  return (
    <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
      {[...category]
        .sort((a, b) => (a === "top" ? -1 : b === "top" ? 1 : 0))
        .map((cat, index) => (
          <span
            key={index}
            className={`inline-flex items-center rounded-full ${cat === "top" ? "bg-amber-500/90" : "bg-blue-500/90"} px-3 py-1 text-xs font-medium text-blue-50 backdrop-blur-sm`}
          >
            {cat}
          </span>
        ))}
    </div>
  );
}

export default CategoryBadge;
