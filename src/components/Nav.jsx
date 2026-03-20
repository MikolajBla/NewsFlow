import {
  NewspaperIcon,
  Cpu,
  Globe,
  Briefcase,
  Heart,
  FlaskConical,
} from "lucide-react";

function Nav({ setSelectedCategory, selectedCategory }) {
  const categories = [
    { id: "all", name: "All News", icon: NewspaperIcon },
    { id: "world", name: "World", icon: Globe },
    { id: "business", name: "Business", icon: Briefcase },
    { id: "technology", name: "Technology", icon: Cpu },
    { id: "health", name: "Health", icon: Heart },
    { id: "science", name: "Science", icon: FlaskConical },
  ];

  return (
    <nav className="sticky top-0 flex h-auto w-full flex-col border-r border-gray-200 p-6 shadow-xl shadow-gray-200 md:h-screen md:w-72">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
            <NewspaperIcon className="h-6 w-6 text-blue-50" />
          </div>
          <h1 className="text-xl text-gray-950">NewsFlow</h1>
        </div>
        <span className="mt-3 flex p-1 text-center text-sm text-gray-400">
          Categories
        </span>
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`mt-2 flex cursor-pointer items-center gap-2 rounded-full border border-transparent p-2 shadow-gray-300 transition-all hover:border-gray-200 hover:bg-blue-100 hover:shadow-sm ${selectedCategory == cat.id ? "border-gray-200 bg-blue-50 text-blue-500" : ""}`}
          >
            <cat.icon /> {cat.name}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
