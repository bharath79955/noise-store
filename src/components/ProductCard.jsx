import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onWishlist, isWishlisted }) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative bg-gray-100 h-72 overflow-hidden">

        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Discount */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {product.discount}% OFF
        </div>

        {/* Wishlist */}
        <button
          onClick={() => onWishlist(product)}
          className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-md transition ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:bg-red-50"
          }`}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-bold mt-1 hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-bold">
            ★ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            {product.reviewsCount} reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Button */}
        <Link
          to={`/products/${product.id}`}
          className="block text-center mt-5 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          View Product
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;