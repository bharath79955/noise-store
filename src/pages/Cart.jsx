import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../utils/store";

import { useTheme } from "../context/ThemeContext";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const { darkMode } = useTheme();

  const loadCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const delivery = subtotal > 0 && subtotal < 999 ? 99 : 0;

  const total = subtotal + delivery;

  // ================= EMPTY CART =================

  if (cart.length === 0) {
    return (
      <div
        className="min-h-[70vh] px-4 py-20 transition-colors duration-300"
        style={{
          backgroundColor: darkMode ? "#000000" : "#f7f9fc",
          color: darkMode ? "#ffffff" : "#111111",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* CART ICON */}
          <div className="text-7xl">🛒</div>

          {/* TITLE */}
          <h1 className="mt-6 text-3xl font-bold">
            Your cart is empty
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-3"
            style={{
              color: darkMode ? "#a1a1aa" : "#6b7280",
            }}
          >
            Add some products to your cart and they will appear here.
          </p>

          {/* CONTINUE SHOPPING */}
          <Link
            to="/products"
            className="mt-7 inline-flex rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#ffffff" : "#111111",
              color: darkMode ? "#111111" : "#ffffff",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // ================= CART =================

  return (
    <div
      className="min-h-screen px-4 py-10 transition-colors duration-300 sm:px-6 lg:px-10"
      style={{
        backgroundColor: darkMode ? "#000000" : "#f7f9fc",
        color: darkMode ? "#ffffff" : "#111111",
      }}
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            NOISE STORE
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Shopping Cart
          </h1>

          <p
            className="mt-2"
            style={{
              color: darkMode ? "#a1a1aa" : "#6b7280",
            }}
          >
            {cart.length} product{cart.length !== 1 ? "s" : ""} in
            your cart
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* ================= PRODUCTS ================= */}

          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl p-5 shadow-sm transition-colors duration-300"
                style={{
                  backgroundColor: darkMode ? "#111111" : "#ffffff",
                }}
              >
                {/* PRODUCT INFO */}

                <div className="flex gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-xl bg-gray-100 object-cover"
                  />

                  <div className="min-w-0 flex-1">

                    <h2 className="text-lg font-bold">
                      {item.name}
                    </h2>

                    <p
                      className="mt-1 text-sm"
                      style={{
                        color: darkMode ? "#a1a1aa" : "#6b7280",
                      }}
                    >
                      {item.category}
                    </p>

                    <p className="mt-3 text-xl font-bold">
                      ₹
                      {Number(item.price || 0).toLocaleString(
                        "en-IN"
                      )}
                    </p>

                  </div>

                  {/* REMOVE */}

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="h-fit rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    Remove
                  </button>

                </div>

                {/* QUANTITY */}

                <div
                  className="flex items-center justify-between border-t pt-4"
                  style={{
                    borderColor: darkMode ? "#27272a" : "#f3f4f6",
                  }}
                >
                  <span
                    className="text-sm"
                    style={{
                      color: darkMode ? "#a1a1aa" : "#6b7280",
                    }}
                  >
                    Quantity
                  </span>

                  <div
                    className="flex items-center overflow-hidden rounded-xl border"
                    style={{
                      borderColor: darkMode
                        ? "#3f3f46"
                        : "#e5e7eb",
                    }}
                  >

                    {/* MINUS */}

                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.id,
                          Math.max(
                            1,
                            (item.quantity || 1) - 1
                          )
                        )
                      }
                      className="px-4 py-2 text-lg transition"
                      style={{
                        color: darkMode ? "#ffffff" : "#111111",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          darkMode ? "#27272a" : "#f3f4f6";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "transparent";
                      }}
                    >
                      −
                    </button>

                    {/* NUMBER */}

                    <span className="min-w-10 text-center font-semibold">
                      {item.quantity || 1}
                    </span>

                    {/* PLUS */}

                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.id,
                          (item.quantity || 1) + 1
                        )
                      }
                      className="px-4 py-2 text-lg transition"
                      style={{
                        color: darkMode ? "#ffffff" : "#111111",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          darkMode ? "#27272a" : "#f3f4f6";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "transparent";
                      }}
                    >
                      +
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* ================= SUMMARY ================= */}

          <div
            className="h-fit rounded-2xl p-6 shadow-sm transition-colors duration-300"
            style={{
              backgroundColor: darkMode ? "#111111" : "#ffffff",
            }}
          >

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              {/* SUBTOTAL */}

              <div
                className="flex justify-between"
                style={{
                  color: darkMode ? "#a1a1aa" : "#6b7280",
                }}
              >
                <span>Subtotal</span>

                <span>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              {/* DELIVERY */}

              <div
                className="flex justify-between"
                style={{
                  color: darkMode ? "#a1a1aa" : "#6b7280",
                }}
              >
                <span>Delivery</span>

                <span>
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </span>
              </div>

              {/* TOTAL */}

              <div
                className="border-t pt-4"
                style={{
                  borderColor: darkMode
                    ? "#27272a"
                    : "#e5e7eb",
                }}
              >
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

            </div>

            {/* CHECKOUT */}

            <button
              onClick={() =>
                alert("Checkout functionality coming soon!")
              }
              className="mt-7 w-full rounded-xl py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
              style={{
                backgroundColor: darkMode
                  ? "#ffffff"
                  : "#111111",

                color: darkMode
                  ? "#111111"
                  : "#ffffff",
              }}
            >
              Proceed to Checkout
            </button>

            {/* CONTINUE SHOPPING */}

            <Link
              to="/products"
              className="mt-4 block text-center text-sm font-semibold transition hover:underline"
              style={{
                color: darkMode ? "#60a5fa" : "#2563eb",
              }}
            >
              Continue Shopping
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}