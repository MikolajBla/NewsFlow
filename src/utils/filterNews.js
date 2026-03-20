export function filterNews({ data, selectedCategory }) {
  return (
    data?.results?.filter(
      (news) =>
        selectedCategory === "all" ||
        selectedCategory.toLowerCase() === news.category[0].toLowerCase(),
    ) || []
  );
}
