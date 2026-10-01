function FilterPanel({
  categories = [],
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
            selectedCategory === category
              ? "bg-black text-white"
              : "border border-gray-300 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterPanel;