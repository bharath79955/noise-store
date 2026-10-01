import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Scroll to top on every page */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>
        <PageTransition>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* PRODUCTS */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* PRODUCT DETAILS */}
            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            {/* CART */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* WISHLIST */}
            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            {/* LOGIN */}
            <Route
              path="/login"
              element={<Login />}
            />

            {/* SIGN UP */}
            <Route
              path="/signup"
              element={<Signup />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;