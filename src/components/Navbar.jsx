import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({
  cartCount = 0,
  wishlistCount = 0,
}) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { darkMode, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Search products
  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/products");
    }

    closeMenu();
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b shadow-sm backdrop-blur"
      style={{
        backgroundColor: darkMode
          ? "rgba(0,0,0,0.96)"
          : "rgba(255,255,255,0.96)",
        borderColor: darkMode ? "#27272a" : "#e5e7eb",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <button
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          aria-label="Go to Noise Store home"
          className="group flex shrink-0 items-center"
        >
          <span
            className="text-2xl font-semibold tracking-[0.18em] transition-all duration-300 group-hover:tracking-[0.25em] sm:text-3xl"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            NOISE
          </span>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="font-medium transition hover:text-blue-600"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium transition hover:text-blue-600"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            Products
          </Link>

          <Link
            to="/about"
            className="font-medium transition hover:text-blue-600"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium transition hover:text-blue-600"
            style={{
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            Contact
          </Link>
        </div>

        {/* =====================================================
            SEARCH
        ====================================================== */}

        <form
          onSubmit={handleSearch}
          className="hidden xl:flex"
        >
          <div
            className="flex h-10 w-56 items-center rounded-full border px-4 transition focus-within:border-blue-500"
            style={{
              backgroundColor: darkMode ? "#111111" : "#f8fafc",
              borderColor: darkMode ? "#404040" : "#d1d5db",
            }}
          >
            <span
              className="mr-2 text-lg"
              style={{
                color: darkMode ? "#ffffff" : "#374151",
              }}
            >
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm outline-none"
              style={{
                color: darkMode ? "#ffffff" : "#111827",
              }}
            />
          </div>
        </form>

        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}

        <div className="hidden items-center gap-3 md:flex">

          {/* THEME */}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border text-lg transition hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#111111" : "#ffffff",
              borderColor: darkMode ? "#404040" : "#d1d5db",
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* WISHLIST */}

          <button
            onClick={() => navigate("/wishlist")}
            aria-label="Wishlist"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border text-xl transition hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#111111" : "#ffffff",
              borderColor: darkMode ? "#404040" : "#d1d5db",
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            ♡

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* CART */}

          <button
            onClick={() => navigate("/cart")}
            aria-label="Cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border text-xl transition hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#111111" : "#ffffff",
              borderColor: darkMode ? "#404040" : "#d1d5db",
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            🛒

            {cartCount > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs"
                style={{
                  backgroundColor: darkMode ? "#ffffff" : "#111111",
                  color: darkMode ? "#111111" : "#ffffff",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* LOGIN */}

          <button
            onClick={() => navigate("/login")}
            className="rounded-full border px-5 py-2 font-semibold transition hover:scale-105"
            style={{
              backgroundColor: "transparent",
              borderColor: darkMode ? "#ffffff" : "#111111",
              color: darkMode ? "#ffffff" : "#111111",
            }}
          >
            Login
          </button>

          {/* SIGN UP */}

          <button
            onClick={() => navigate("/signup")}
            className="rounded-full px-5 py-2 font-semibold transition hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#ffffff" : "#111111",
              color: darkMode ? "#111111" : "#ffffff",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="rounded-xl border px-3 py-2 text-xl md:hidden"
          style={{
            backgroundColor: darkMode ? "#111111" : "#ffffff",
            borderColor: darkMode ? "#404040" : "#d1d5db",
            color: darkMode ? "#ffffff" : "#111111",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {menuOpen && (
        <div
          className="border-t px-5 py-6 md:hidden"
          style={{
            backgroundColor: darkMode ? "#000000" : "#ffffff",
            borderColor: darkMode ? "#27272a" : "#e5e7eb",
          }}
        >
          <div className="flex flex-col gap-4">

            {/* MOBILE SEARCH */}

            <form onSubmit={handleSearch}>
              <div
                className="flex h-12 items-center rounded-xl border px-4"
                style={{
                  backgroundColor: darkMode ? "#111111" : "#f8fafc",
                  borderColor: darkMode ? "#404040" : "#d1d5db",
                }}
              >
                <span className="mr-2">🔍</span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent outline-none"
                  style={{
                    color: darkMode ? "#ffffff" : "#111827",
                  }}
                />
              </div>
            </form>

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              Products
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              Contact
            </Link>

            <Link
              to="/wishlist"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              ♡ Wishlist
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium"
              style={{
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              🛒 Cart
            </Link>

            {/* MOBILE THEME */}

            <button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className="flex items-center justify-between rounded-xl border px-4 py-3 font-medium"
              style={{
                borderColor: darkMode ? "#404040" : "#d1d5db",
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              <span>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </span>

              <span>{darkMode ? "ON" : "OFF"}</span>
            </button>

            {/* LOGIN */}

            <button
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
              className="rounded-xl border py-3 font-semibold"
              style={{
                backgroundColor: "transparent",
                borderColor: darkMode ? "#ffffff" : "#111111",
                color: darkMode ? "#ffffff" : "#111111",
              }}
            >
              Login
            </button>

            {/* SIGN UP */}

            <button
              onClick={() => {
                navigate("/signup");
                closeMenu();
              }}
              className="rounded-xl py-3 font-semibold"
              style={{
                backgroundColor: darkMode ? "#ffffff" : "#111111",
                color: darkMode ? "#111111" : "#ffffff",
              }}
            >
              Sign Up
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}