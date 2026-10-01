import { Link } from "react-router-dom";
import {
  ArrowRight,
  Headphones,
  Watch,
  Smartphone,
  ShoppingBag,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    title: "Smart Watches",
    icon: <Watch size={28} />,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    title: "Earbuds",
    icon: <Headphones size={28} />,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
  },
  {
    title: "Accessories",
    icon: <Smartphone size={28} />,
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800",
  },
];

const products = [
  {
    id: 1,
    name: "Noise ColorFit Ultra 3",
    category: "Smart Watch",
    price: 2999,
    oldPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 2,
    name: "Noise Buds X Prime",
    category: "Wireless Earbuds",
    price: 1499,
    oldPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
  },
  {
    id: 3,
    name: "NoiseFit Active 2",
    category: "Smart Watch",
    price: 2499,
    oldPrice: 4999,
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800",
  },
  {
    id: 4,
    name: "Noise Air Buds",
    category: "Wireless Earbuds",
    price: 1299,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
  },
];

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          min-h-[680px]
          overflow-hidden
          bg-white
          px-5
          py-16
          text-gray-900
          dark:bg-black
          dark:text-white
          sm:px-8
          lg:px-12
          lg:py-20
        "
      >

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/10
            blur-3xl
            dark:bg-blue-600/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            right-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            lg:grid-cols-2
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-10">

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                tracking-[0.35em]
                text-gray-500
                dark:text-gray-400
              "
            >
              <Sparkles size={14} className="text-blue-600" />
              SMARTER EVERY DAY
            </span>

            <h1
              className="
                mt-5
                max-w-2xl
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                sm:text-7xl
                lg:text-8xl
              "
            >
              MAKE SOME

              <span className="block text-blue-600">
                NOISE.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-gray-600
                sm:text-lg
                dark:text-gray-400
              "
            >
              Discover smartwatches, earbuds and audio products
              designed for your everyday lifestyle.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-black
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-blue-600
                  dark:hover:text-white
                "
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-300
                  px-7
                  py-3.5
                  font-semibold
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-black
                  dark:border-gray-700
                  dark:hover:border-white
                "
              >
                Discover Noise
              </Link>

            </div>

            {/* Small benefits */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-7
                gap-y-4
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    dark:bg-blue-950
                  "
                >
                  <ShieldCheck size={17} />
                </span>

                Genuine Products
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    dark:bg-blue-950
                  "
                >
                  ✓
                </span>

                Fast Delivery
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE PRODUCT SHOWCASE
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:min-h-[580px]
            "
          >

            {/* Large blue circle */}

            <div
              className="
                absolute
                h-[320px]
                w-[320px]
                rounded-full
                bg-gradient-to-br
                from-blue-500
                via-blue-600
                to-cyan-400
                opacity-10
                blur-sm
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            {/* Circle border */}

            <div
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-blue-500/20
                sm:h-[390px]
                sm:w-[390px]
              "
            />

            {/* Decorative dots */}

            <span
              className="
                absolute
                right-[12%]
                top-[10%]
                h-4
                w-4
                rounded-full
                bg-blue-500
                shadow-lg
                shadow-blue-500/50
              "
            />

            <span
              className="
                absolute
                bottom-[15%]
                left-[8%]
                h-3
                w-3
                rounded-full
                bg-cyan-400
              "
            />

            <span
              className="
                absolute
                bottom-[25%]
                right-[5%]
                h-2
                w-2
                rounded-full
                bg-blue-400
              "
            />


            {/* =================================================
                SMARTWATCH
            ================================================== */}

            <div
              className="
                relative
                z-20
                flex
                h-[350px]
                w-[245px]
                items-center
                justify-center
                rounded-[58px]
                bg-gradient-to-br
                from-gray-700
                via-gray-950
                to-black
                shadow-[0_35px_80px_rgba(0,0,0,0.35)]
                transition
                duration-500
                hover:scale-105
                hover:-rotate-2
                dark:shadow-[0_35px_90px_rgba(0,100,255,0.22)]
              "
            >

              {/* Top strap */}

              <div
                className="
                  absolute
                  -top-28
                  h-36
                  w-28
                  rounded-t-[38px]
                  bg-gradient-to-b
                  from-gray-700
                  to-black
                "
              />

              {/* Bottom strap */}

              <div
                className="
                  absolute
                  -bottom-28
                  h-36
                  w-28
                  rounded-b-[38px]
                  bg-gradient-to-b
                  from-black
                  to-gray-700
                "
              />

              {/* Watch display */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[265px]
                  w-[205px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[42px]
                  bg-gradient-to-br
                  from-gray-900
                  via-black
                  to-blue-950
                  ring-4
                  ring-gray-700
                "
              >

                <p
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.35em]
                    text-gray-400
                  "
                >
                  NOISE
                </p>

                <p className="mt-3 text-5xl font-bold text-white">
                  10:28
                </p>

                <p className="mt-2 text-xs text-blue-400">
                  SMART • CONNECTED
                </p>

                {/* Heart rate */}

                <div className="mt-7 flex items-center gap-2">
                  <span className="text-red-500">
                    ♥
                  </span>

                  <span className="text-xs text-gray-400">
                    72 BPM
                  </span>
                </div>

                {/* Bottom indicators */}

                <div className="mt-6 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>

              </div>

              {/* Watch side button */}

              <div
                className="
                  absolute
                  -right-3
                  top-24
                  h-12
                  w-4
                  rounded-r-lg
                  bg-gray-600
                "
              />

            </div>


            {/* =================================================
                NEW ARRIVAL CARD
            ================================================== */}

            <div
              className="
                absolute
                bottom-2
                left-0
                z-30
                w-52
                rounded-3xl
                border
                border-white/50
                bg-white/85
                p-4
                shadow-2xl
                backdrop-blur-xl
                transition
                duration-500
                hover:-translate-y-2
                dark:border-gray-700
                dark:bg-gray-900/85
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-bold tracking-wider text-gray-500 dark:text-gray-400">
                    NEW ARRIVAL
                  </p>

                  <h3 className="mt-1 text-sm font-bold">
                    Noise Buds
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-black
                    text-xl
                    dark:bg-white
                  "
                >
                  🎧
                </div>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs font-bold">
                  From ₹1,499
                </span>

                <Link
                  to="/products"
                  className="
                    rounded-full
                    bg-blue-600
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-white
                    transition
                    hover:bg-black
                  "
                >
                  SHOP
                </Link>

              </div>

            </div>


            {/* =================================================
                RATING CARD
            ================================================== */}

            <div
              className="
                absolute
                right-0
                top-10
                z-30
                rounded-2xl
                border
                border-white/50
                bg-white/85
                px-5
                py-4
                shadow-xl
                backdrop-blur-xl
                dark:border-gray-700
                dark:bg-gray-900/85
              "
            >

              <div className="flex items-center gap-2">

                <Star
                  size={16}
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="font-bold">
                  4.8
                </span>

              </div>

              <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                Loved by 10K+ users
              </p>

            </div>


            {/* =================================================
                OFFER BADGE
            ================================================== */}

            <div
              className="
                absolute
                bottom-20
                right-0
                z-30
                flex
                h-20
                w-20
                rotate-12
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-center
                text-[10px]
                font-bold
                leading-4
                text-white
                shadow-xl
                shadow-blue-600/30
              "
            >
              UP TO
              <br />
              50% OFF
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="features">

        <div>
          <strong>Free Shipping</strong>
          <span>On orders above ₹999</span>
        </div>

        <div>
          <strong>7 Days Replacement</strong>
          <span>Easy replacement policy</span>
        </div>

        <div>
          <strong>Secure Payments</strong>
          <span>100% secure checkout</span>
        </div>

        <div>
          <strong>Genuine Products</strong>
          <span>Quality guaranteed</span>
        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="section">

        <div className="section-heading">

          <div>
            <span>SHOP BY CATEGORY</span>
            <h2>Find your perfect tech</h2>
          </div>

          <Link to="/products">
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="category-grid">

          {categories.map((category) => (

            <Link
              to="/products"
              className="category-card"
              key={category.title}
            >

              <img
                src={category.image}
                alt={category.title}
              />

              <div className="category-content">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

                <span>
                  Explore
                  <ArrowRight size={16} />
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="section products-section">

        <div className="section-heading">

          <div>
            <span>BEST SELLERS</span>
            <h2>Trending products</h2>
          </div>

          <Link to="/products">
            Shop All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="product-grid">

          {products.map((product) => (

            <Link
              to={`/products/${product.id}`}
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <span className="sale-badge">
                  SALE
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <span>
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="price">

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <del>
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </del>

                </div>

                <button
                  className="cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <ShoppingBag size={17} />
                  Add to Cart
                </button>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROMO
      ====================================================== */}

      <section className="promo">

        <div>

          <span>
            LIMITED TIME OFFER
          </span>

          <h2>
            Upgrade your
            <br />
            everyday life.
          </h2>

          <p>
            Premium technology. Powerful performance.
            Designed for you.
          </p>

          <Link
            to="/products"
            className="primary-btn"
          >
            Shop Now
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;