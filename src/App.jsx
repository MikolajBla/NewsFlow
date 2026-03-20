import Nav from "./components/Nav";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "./api/fetchNews";
import { filterNews } from "./utils/filterNews";
import NewsList from "./components/NewsList";
import LoaderComp from "./components/LoaderComp";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews(selectedCategory),
  });
  const filteredNews = useMemo(() => {
    if (!data) return [];
    return filterNews({ data, selectedCategory });
  }, [data, selectedCategory]);

  if (isLoading) return <LoaderComp />;

  return (
    <div className="min-h-screen overflow-hidden md:flex md:overflow-visible">
      <Nav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-8">
          {isLoading ? (
            <LoaderComp />
          ) : (
            data &&
            data.results && (
              <div className="flex auto-rows-auto flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                <NewsList filteredNews={filteredNews} />
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
