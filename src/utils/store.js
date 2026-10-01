const CART_KEY = "noise-cart";
const WISHLIST_KEY = "noise-wishlist";

/* =========================================
   CART
========================================= */

export const getCart = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addToCart = (product) => {
  const cart = getCart();

  const existing = cart.find(
    (item) => Number(item.id) === Number(product.id)
  );

  let updatedCart;

  if (existing) {
    updatedCart = cart.map((item) =>
      Number(item.id) === Number(product.id)
        ? {
            ...item,
            quantity: Number(item.quantity || 1) + 1,
          }
        : item
    );
  } else {
    updatedCart = [
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));

  return updatedCart;
};

export const removeFromCart = (id) => {
  const cart = getCart();

  const updatedCart = cart.filter(
    (item) => Number(item.id) !== Number(id)
  );

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));

  return updatedCart;
};

export const updateCartQuantity = (id, quantity) => {
  const cart = getCart();

  const updatedCart = cart.map((item) =>
    Number(item.id) === Number(id)
      ? {
          ...item,
          quantity: Math.max(1, Number(quantity)),
        }
      : item
  );

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(updatedCart)
  );

  window.dispatchEvent(new Event("cartUpdated"));

  return updatedCart;
};

export const getCartCount = () => {
  const cart = getCart();

  return cart.reduce(
    (total, item) =>
      total + Number(item.quantity || 1),
    0
  );
};


/* =========================================
   WISHLIST
========================================= */

export const getWishlist = () => {
  try {
    const data = localStorage.getItem(WISHLIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();

  const exists = wishlist.some(
    (item) => Number(item.id) === Number(product.id)
  );

  if (exists) {
    return wishlist;
  }

  const updatedWishlist = [
    ...wishlist,
    product,
  ];

  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(updatedWishlist)
  );

  window.dispatchEvent(
    new Event("wishlistUpdated")
  );

  return updatedWishlist;
};

export const removeFromWishlist = (id) => {
  const wishlist = getWishlist();

  const updatedWishlist = wishlist.filter(
    (item) => Number(item.id) !== Number(id)
  );

  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(updatedWishlist)
  );

  window.dispatchEvent(
    new Event("wishlistUpdated")
  );

  return updatedWishlist;
};

export const toggleWishlist = (product) => {
  const wishlist = getWishlist();

  const exists = wishlist.some(
    (item) => Number(item.id) === Number(product.id)
  );

  if (exists) {
    return removeFromWishlist(product.id);
  }

  return addToWishlist(product);
};

export const isInWishlist = (id) => {
  return getWishlist().some(
    (item) => Number(item.id) === Number(id)
  );
};

export const getWishlistCount = () => {
  return getWishlist().length;
};


/* =========================================
   CLEAR FUNCTIONS
========================================= */

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);

  window.dispatchEvent(
    new Event("cartUpdated")
  );
};

export const clearWishlist = () => {
  localStorage.removeItem(WISHLIST_KEY);

  window.dispatchEvent(
    new Event("wishlistUpdated")
  );
};