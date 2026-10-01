import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  addToCart,
  getWishlist,
  toggleWishlist,
} from "../utils/store";

const products = [
  {
    id: 1,
    name: "NoiseFit Smartwatch Pro",
    category: "Smartwatches",
    price: 1799,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=1000",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000",
    ],
    description:
      "Premium smartwatch with fitness tracking, smart notifications, heart-rate monitoring and a stylish design for everyday use.",
    features: [
      "AMOLED Display",
      "Bluetooth Calling",
      "Heart Rate Monitoring",
      "SpO2 Monitoring",
      "Multiple Sports Modes",
      "7 Days Battery Life",
    ],
  },

  {
    id: 2,
    name: "Noise Buds X",
    category: "Earbuds",
    price: 1499,
    oldPrice: 2499,
    rating: 4.4,
    reviews: 96,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1000",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=1000",
    ],
    description:
      "Wireless earbuds with powerful bass, comfortable fit, low latency gaming mode and long battery life.",
    features: [
      "Wireless Bluetooth",
      "Low Latency Mode",
      "Deep Bass",
      "Touch Controls",
      "Fast Charging",
      "Long Battery Life",
    ],
  },

  {
    id: 3,
    name: "Noise Headphones Pro",
    category: "Headphones",
    price: 3499,
    oldPrice: 4999,
    rating: 4.6,
    reviews: 214,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000",
    ],
    description:
      "Premium over-ear wireless headphones delivering immersive sound, deep bass and all-day comfort.",
    features: [
      "Wireless Audio",
      "Deep Bass",
      "Comfortable Ear Cushions",
      "Built-in Microphone",
      "Fast Charging",
      "Premium Design",
    ],
  },

  {
    id: 4,
    name: "Noise ColorFit Ultra",
    category: "Smartwatches",
    price: 2999,
    oldPrice: 4499,
    rating: 4.3,
    reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=1000",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000",
    ],
    description:
      "Stylish smartwatch with AMOLED display, health monitoring and multiple activity tracking modes.",
    features: [
      "AMOLED Display",
      "Fitness Tracking",
      "Heart Rate Monitor",
      "Sleep Tracking",
      "Smart Notifications",
      "Water Resistant",
    ],
  },

  {
    id: 5,
    name: "Noise Air Buds",
    category: "Earbuds",
    price: 1999,
    oldPrice: 2999,
    rating: 4.2,
    reviews: 154,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1000",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=1000",
    ],
    description:
      "Compact wireless earbuds with clear audio, comfortable fit and long-lasting battery performance.",
    features: [
      "Wireless Bluetooth",
      "Clear Audio",
      "Touch Controls",
      "Compact Design",
      "Fast Charging",
      "Low Latency",
    ],
  },

  {
    id: 6,
    name: "Noise Soundbar Max",
    category: "Audio",
    price: 4999,
    oldPrice: 6999,
    rating: 4.7,
    reviews: 73,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1000",
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=1000",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1000",
    ],
    description:
      "Powerful home audio system designed to deliver cinematic sound for movies, music and gaming.",
    features: [
      "Powerful Bass",
      "Bluetooth Connectivity",
      "Cinema Sound",
      "Multiple Audio Modes",
      "Remote Control",
      "Premium Design",
    ],
  },
];

const reviewData = [
  {
    name: "Rahul",
    rating: 5,
    text: "Excellent product. The quality is really good for the price.",
  },
  {
    name: "Priya",
    rating: 4,
    text: "Good design and performance. Delivery was also fast.",
  },
  {
    name: "Arjun",
    rating: 5,
    text: "Very happy with the purchase. Highly recommended.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [wishlist, setWishlist] = useState(() => {
    return getWishlist();
  });

  /* =========================
     SYNC WISHLIST
  ========================= */

  useEffect(() => {
    const updateWishlist = () => {
      setWishlist(getWishlist());
    };

    window.addEventListener(
      "wishlistUpdated",
      updateWishlist
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlist
      );
    };
  }, []);

  /* =========================
     PRODUCT NOT FOUND
  ========================= */

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5 dark:bg-black">
        <div className="text-center">
          <div className="text-7xl">📦</div>

          <h1 className="mt-5 text-3xl font-black text-gray-900 dark:text-white">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            The product you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 rounded-xl bg-black px-7 py-3 font-bold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     WISHLIST STATUS
  ========================= */

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  /* =========================
     ADD / REMOVE WISHLIST
  ========================= */

  const handleWishlist = () => {
    const updatedWishlist = toggleWishlist(product);

    setWishlist(updatedWishlist);

    if (isWishlisted) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist ❤️");
    }
  };

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast.success(
      `${quantity} × ${product.name} added to cart 🛒`
    );
  };

  /* =========================
     BUY NOW
  ========================= */

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast.success("Added to cart");

    setTimeout(() => {
      navigate("/cart");
    }, 300);
  };

  /* =========================
     IMAGE CONTROLS
  ========================= */

  const nextImage = () => {
    setCurrentImage(
      (previous) =>
        (previous + 1) % product.images.length
    );
  };

  const previousImage = () => {
    setCurrentImage(
      (previous) =>
        (previous - 1 + product.images.length) %
        product.images.length
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">

      {/* =========================
          PRODUCT SECTION
      ========================= */}

      <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* =========================
              IMAGE GALLERY
          ========================= */}

          <div>
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-gray-900">

              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[500px] lg:h-[600px]"
              />

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-black shadow-lg transition hover:scale-110"
              >
                ←
              </button>

              {/* NEXT */}

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-black shadow-lg transition hover:scale-110"
              >
                →
              </button>

              {/* IMAGE COUNT */}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white">
                {currentImage + 1} / {product.images.length}
              </div>
            </div>

            {/* THUMBNAILS */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image + index}
                  onClick={() => setCurrentImage(index)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    currentImage === index
                      ? "border-black dark:border-white"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-24 w-full object-cover sm:h-28"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* =========================
              PRODUCT INFORMATION
          ========================= */}

          <div className="flex flex-col justify-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {product.name}
            </h1>

            {/* RATING */}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="rounded-lg bg-green-600 px-3 py-1 text-sm font-bold text-white">
                ⭐ {product.rating}
              </div>

              <span className="text-gray-500 dark:text-gray-400">
                {product.reviews} verified reviews
              </span>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-400">
              {product.description}
            </p>

            {/* PRICE */}

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="text-4xl font-black text-gray-900 dark:text-white">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-xl text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                {Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                )}
                % OFF
              </span>
            </div>

            {/* DELIVERY */}

            <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-900">
              <div className="grid gap-4 sm:grid-cols-3">

                <div>
                  <p className="text-xl">🚚</p>

                  <p className="mt-2 font-bold text-gray-900 dark:text-white">
                    Free Delivery
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3–5 business days
                  </p>
                </div>

                <div>
                  <p className="text-xl">🔄</p>

                  <p className="mt-2 font-bold text-gray-900 dark:text-white">
                    Easy Returns
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    7 days replacement
                  </p>
                </div>

                <div>
                  <p className="text-xl">🛡️</p>

                  <p className="mt-2 font-bold text-gray-900 dark:text-white">
                    Warranty
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    1 year warranty
                  </p>
                </div>

              </div>
            </div>

            {/* QUANTITY */}

            <div className="mt-7">
              <p className="mb-3 font-bold text-gray-900 dark:text-white">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((previous) =>
                      Math.max(1, previous - 1)
                    )
                  }
                  className="px-5 py-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                >
                  −
                </button>

                <span className="min-w-12 text-center font-bold text-gray-900 dark:text-white">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((previous) =>
                      Math.min(10, previous + 1)
                    )
                  }
                  className="px-5 py-3 text-xl text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                >
                  +
                </button>

              </div>
            </div>

            {/* ACTION BUTTONS */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {/* ADD TO CART */}

              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-2xl border-2 border-black bg-white py-4 font-bold text-black transition hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                🛒 Add to Cart
              </button>

              {/* BUY NOW */}

              <button
                type="button"
                onClick={handleBuyNow}
                className="rounded-2xl bg-black py-4 font-bold text-white transition hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                ⚡ Buy Now
              </button>

            </div>

            {/* WISHLIST */}

            <button
              type="button"
              onClick={handleWishlist}
              className={`mt-3 w-full rounded-2xl border-2 py-4 font-bold transition ${
                isWishlisted
                  ? "border-red-500 bg-red-50 text-red-500 dark:bg-red-950"
                  : "border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-white"
              }`}
            >
              {isWishlisted
                ? "♥ Remove from Wishlist"
                : "♡ Add to Wishlist"}
            </button>

          </div>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section className="border-t border-gray-200 bg-white px-4 py-14 dark:border-gray-800 dark:bg-black">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl font-black text-gray-900 dark:text-white">
            Product Features
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-900"
              >
                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    ✓
                  </span>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    {feature}
                  </span>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          REVIEWS
      ========================= */}

      <section className="bg-gray-50 px-4 py-14 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                Customer Reviews
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {product.rating} out of 5 based on{" "}
                {product.reviews} reviews
              </p>
            </div>

            <div className="text-4xl font-black text-gray-900 dark:text-white">
              ⭐ {product.rating}
            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {reviewData.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900"
              >

                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  "{review.text}"
                </p>

                <p className="mt-5 font-bold text-gray-900 dark:text-white">
                  {review.name}
                </p>

                <p className="text-sm text-green-600">
                  ✓ Verified Purchase
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          BACK
      ========================= */}

      <div className="bg-white px-4 py-10 dark:bg-black">
        <div className="mx-auto max-w-7xl">

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="font-bold text-gray-900 underline dark:text-white"
          >
            ← Back to Products
          </button>

        </div>
      </div>

    </main>
  );
}