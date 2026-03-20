export function filterNews({ data, selectedCategory }) {
  return (
    data?.results?.filter(
      (news) =>
        selectedCategory === "all" ||
        news.category?.some(
          (cat) => cat.toLowerCase() === selectedCategory.toLowerCase(),
        ),
    ) || []
  );
}
