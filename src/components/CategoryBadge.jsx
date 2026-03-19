function CategoryBadge({ category }) {
  return (
    <div className="absolute top-4 left-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-blue-50 bg-blue-500/90 backdrop-blur-sm  text-xs font-medium">
        {category}
      </span>
    </div>
  );
}

export default CategoryBadge;
