function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-lg transition hover:bg-black hover:text-white"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;