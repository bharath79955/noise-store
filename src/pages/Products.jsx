import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";

const products = [
  {
    id: 1,
    name: "NoiseFit Smartwatch Pro",
    category: "Smartwatches",
    price: 1799,
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    description:
      "Premium smartwatch with fitness tracking and smart notifications.",
  },
  {
    id: 2,
    name: "Noise Buds X",
    category: "Earbuds",
    price: 1499,
    rating: 4.4,
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900",
    description:
      "Wireless earbuds with powerful bass and noise cancellation.",
  },
  {
    id: 3,
    name: "Noise Headphones Pro",
    category: "Headphones",
    price: 3499,
    rating: 4.6,
    reviews: 214,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
    description:
      "Comfortable over-ear headphones with immersive sound.",
  },
  {
    id: 4,
    name: "Noise ColorFit Ultra",
    category: "Smartwatches",
    price: 2999,
    rating: 4.3,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=900",
    description:
      "Stylish smartwatch with AMOLED display and health monitoring.",
  },
  {
    id: 5,
    name: "Noise Air Buds",
    category: "Earbuds",
    price: 1999,
    rating: 4.2,
    reviews: 154,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900",
    description:
      "Compact wireless earbuds with long battery life.",
  },
  {
    id: 6,
    name: "Noise Soundbar Max",
    category: "Audio",
    price: 4999,
    rating: 4.7,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900",
    description:
      "Powerful home audio system with cinematic sound.",
  },
];

const categories = [
  "All",
  "Smartwatches",
  "Earbuds",
  "Headphones",
  "Audio",
];

export default function Products() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(6000);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  // --------------------------------
  // LOADING EFFECT
  // --------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // --------------------------------
  // WISHLIST
  // --------------------------------

  const toggleWishlist = (product) => {
    let updated;

    if (wishlist.some((item) => item.id === product.id)) {
      updated = wishlist.filter((item) => item.id !== product.id);
    } else {
      updated = [...wishlist, product];
    }

    setWishlist(updated);

    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // --------------------------------
  // FILTER
  // --------------------------------

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      const matchesRating = product.rating >= minRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating
      );
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, category, maxPrice, minRating, sort]);

  // --------------------------------
  // RESET FILTERS
  // --------------------------------

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPrice(6000);
    setMinRating(0);
    setSort("default");
  };

  // --------------------------------
  // WISHLIST CHECK
  // --------------------------------

  const isWishlisted = (id) =>
    wishlist.some((item) => item.id === id);

  // --------------------------------
  // LOADING SCREEN
  // --------------------------------

  if (loading) {
    return (
      <section className="min-h-screen bg-[#f7f9fc] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

            <div className="mt-3 h-10 w-64 animate-pulse rounded-lg bg-gray-200" />

            <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-gray-200" />
          </div>

          {/* Search skeleton */}
          <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="h-12 flex-1 animate-pulse rounded-xl bg-gray-200" />
              <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200 md:w-32" />
              <div className="h-12 w-full animate-pulse rounded-xl bg-gray-200 md:w-48" />
            </div>
          </div>

          {/* Product skeletons */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>

        </div>
      </section>
    );
  }

  // --------------------------------
  // MAIN PAGE
  // --------------------------------

  return (
    <div className="min-h-screen bg-[#f7f9fc] px-4 py-6 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}

        <div className="mb-7">
          <p className="text-sm font-medium text-blue-600">
            NOISE STORE
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Products
          </h1>

          <p className="mt-2 text-gray-500">
            Discover smartwatches, earbuds, headphones and audio products.
          </p>
        </div>

        {/* SEARCH + FILTER BAR */}

        <div className="mb-7 rounded-2xl bg-white p-4 shadow-sm">

          <div className="flex flex-col gap-3 lg:flex-row">

            {/* SEARCH */}

            <div className="relative flex-1">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />

            </div>

            {/* FILTER BUTTON */}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-12 rounded-xl px-6 font-semibold transition ${
                showFilters
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              ⚙️ Filters
            </button>

            {/* SORT */}

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-12 rounded-xl border border-gray-200 bg-white px-4 font-medium text-gray-700 outline-none"
            >
              <option value="default">
                Sort: Default
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rating
              </option>

              <option value="reviews">
                Most Reviewed
              </option>
            </select>

          </div>

          {/* FILTER PANEL */}

          {showFilters && (
            <div className="mt-5 border-t border-gray-100 pt-5">

              <div className="grid gap-6 md:grid-cols-3">

                {/* CATEGORY */}

                <div>

                  <h3 className="mb-3 font-semibold text-gray-800">
                    Category
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                          category === item
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}

                  </div>

                </div>

                {/* PRICE */}

                <div>

                  <h3 className="mb-3 font-semibold text-gray-800">
                    Maximum Price
                  </h3>

                  <div className="mb-2 flex justify-between text-sm">
                    <span>₹0</span>

                    <strong>
                      ₹{maxPrice.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="6000"
                    step="100"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(Number(e.target.value))
                    }
                    className="w-full accent-blue-600"
                  />

                </div>

                {/* RATING */}

                <div>

                  <h3 className="mb-3 font-semibold text-gray-800">
                    Minimum Rating
                  </h3>

                  <select
                    value={minRating}
                    onChange={(e) =>
                      setMinRating(Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
                  >
                    <option value={0}>
                      All Ratings
                    </option>

                    <option value={4}>
                      ⭐ 4.0 & above
                    </option>

                    <option value={4.5}>
                      ⭐ 4.5 & above
                    </option>

                    <option value={4.7}>
                      ⭐ 4.7 & above
                    </option>
                  </select>

                </div>

              </div>

              {/* RESET */}

              <button
                onClick={resetFilters}
                className="mt-5 rounded-xl border border-red-200 px-5 py-2.5 font-medium text-red-600 transition hover:bg-red-50"
              >
                ↻ Reset Filters
              </button>

            </div>
          )}

        </div>

        {/* RESULT COUNT */}

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          <p className="text-sm text-gray-500">

            Showing{" "}

            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}

            products

          </p>

          {(search ||
            category !== "All" ||
            maxPrice !== 6000 ||
            minRating !== 0 ||
            sort !== "default") && (

            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Clear all
            </button>

          )}

        </div>

        {/* PRODUCTS */}

        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}

                <div
                  className="relative cursor-pointer overflow-hidden bg-gray-100"
                  onClick={() =>
                    navigate(`/products/${product.id}`)
                  }
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                    {product.category}
                  </span>

                  {/* WISHLIST */}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition ${
                      isWishlisted(product.id)
                        ? "text-red-500"
                        : "text-gray-500 hover:text-red-500"
                    }`}
                  >
                    {isWishlisted(product.id)
                      ? "♥️"
                      : "♡"}
                  </button>

                </div>

                {/* DETAILS */}

                <div className="p-5">

                  <div className="mb-2 flex items-center gap-1">

                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="font-semibold text-gray-800">
                      {product.rating}
                    </span>

                    <span className="text-sm text-gray-400">
                      ({product.reviews} reviews)
                    </span>

                  </div>

                  <h2 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">

                    <div>

                      <p className="text-2xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <p className="text-xs text-green-600">
                        Free delivery
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        navigate(`/products/${product.id}`)
                      }
                      className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                    >
                      View Product
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="rounded-2xl bg-white py-20 text-center shadow-sm">

            <div className="text-5xl">
              🔍
            </div>

            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Reset Filters
            </button>

          </div>

        )}

      </div>
    </div>
  );
}