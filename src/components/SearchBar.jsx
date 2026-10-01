function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
}) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="search"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-full border border-gray-300 bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;