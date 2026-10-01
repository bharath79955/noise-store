import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getWishlist,
  removeFromWishlist,
  addToCart,
} from "../utils/store";

import { useTheme } from "../context/ThemeContext";

export default function Wishlist() {
  const navigate = useNavigate();

  const { darkMode } = useTheme();

  const [wishlist, setWishlist] = useState([]);

  const loadWishlist = () => {
    setWishlist(getWishlist());
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener("wishlistUpdated", loadWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist);
    };
  }, []);

  // ================= EMPTY WISHLIST =================

  if (wishlist.length === 0) {
    return (
      <div
        className="min-h-[70vh] px-4 py-20 transition-colors duration-300"
        style={{
          backgroundColor: darkMode ? "#000000" : "#f7f9fc",
          color: darkMode ? "#ffffff" : "#111111",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">

          {/* HEART ICON */}

          <div className="text-7xl">♡</div>

          {/* TITLE */}

          <h1 className="mt-6 text-3xl font-bold">
            Your wishlist is empty
          </h1>

          {/* DESCRIPTION */}

          <p
            className="mt-3"
            style={{
              color: darkMode ? "#a1a1aa" : "#6b7280",
            }}
          >
            Save your favorite Noise products here.
          </p>

          {/* EXPLORE PRODUCTS */}

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundColor: darkMode ? "#ffffff" : "#111111",
              color: darkMode ? "#111111" : "#ffffff",
            }}
          >
            Explore Products
          </Link>

        </div>
      </div>
    );
  }

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // ================= WISHLIST =================

  return (
    <div
      className="min-h-screen px-4 py-10 transition-colors duration-300 sm:px-6 lg:px-10"
      style={{
        backgroundColor: darkMode ? "#000000" : "#f7f9fc",
        color: darkMode ? "#ffffff" : "#111111",
      }}
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            NOISE STORE
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            My Wishlist
          </h1>

          <p
            className="mt-2"
            style={{
              color: darkMode ? "#a1a1aa" : "#6b7280",
            }}
          >
            {wishlist.length} saved product
            {wishlist.length !== 1 ? "s" : ""}
          </p>

        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: darkMode
                  ? "#111111"
                  : "#ffffff",
              }}
            >

              {/* PRODUCT IMAGE */}

              <div
                onClick={() =>
                  navigate(`/products/${product.id}`)
                }
                className="cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: darkMode
                    ? "#18181b"
                    : "#f3f4f6",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* PRODUCT DETAILS */}

              <div className="p-5">

                {/* RATING */}

                <div className="flex items-center gap-1 text-sm">

                  <span className="text-yellow-500">
                    ★
                  </span>

                  <span className="font-semibold">
                    {product.rating}
                  </span>

                  <span
                    style={{
                      color: darkMode
                        ? "#71717a"
                        : "#9ca3af",
                    }}
                  >
                    ({product.reviews})
                  </span>

                </div>

                {/* PRODUCT NAME */}

                <h2 className="mt-2 text-lg font-bold">
                  {product.name}
                </h2>

                {/* CATEGORY */}

                <p
                  className="mt-1 text-sm"
                  style={{
                    color: darkMode
                      ? "#a1a1aa"
                      : "#6b7280",
                  }}
                >
                  {product.category}
                </p>

                {/* PRICE */}

                <p className="mt-4 text-2xl font-bold">
                  ₹
                  {Number(product.price || 0).toLocaleString(
                    "en-IN"
                  )}
                </p>

                {/* ACTION BUTTONS */}

                <div className="mt-5 grid grid-cols-2 gap-3">

                  {/* ADD TO CART */}

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                    style={{
                      backgroundColor: darkMode
                        ? "#ffffff"
                        : "#111111",

                      color: darkMode
                        ? "#111111"
                        : "#ffffff",
                    }}
                  >
                    Add to Cart
                  </button>

                  {/* REMOVE */}

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="rounded-xl border px-3 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-950"
                    style={{
                      borderColor: darkMode
                        ? "#7f1d1d"
                        : "#fecaca",
                    }}
                  >
                    Remove
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}