import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">

      <div className="mx-auto max-w-7xl px-5 py-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              NOISE
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Smart technology, bold design and products
              made for your everyday lifestyle.
            </p>

            <div className="mt-6 flex gap-3">

              <button className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-black">
                <Instagram size={18} />
              </button>

              <button className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-black">
                <Facebook size={18} />
              </button>

              <button className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-black">
                <Twitter size={18} />
              </button>

              <button className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-black">
                <Youtube size={18} />
              </button>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">

              <Link
                to="/products"
                className="transition hover:text-white"
              >
                All Products
              </Link>

              <Link
                to="/products?category=Smartwatches"
                className="transition hover:text-white"
              >
                Smartwatches
              </Link>

              <Link
                to="/products?category=Earbuds"
                className="transition hover:text-white"
              >
                Earbuds
              </Link>

              <Link
                to="/products?category=Headphones"
                className="transition hover:text-white"
              >
                Headphones
              </Link>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">

              <Link
                to="/about"
                className="transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                className="transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="transition hover:text-white"
              >
                Sign Up
              </Link>

            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold">
              Support
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Need help with your order or product?
              Contact our support team.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-gray-200"
            >
              Contact Support
            </Link>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-800 pt-7 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NOISE STORE. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;