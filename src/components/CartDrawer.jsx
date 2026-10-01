import { useEffect } from "react";

function CartDrawer({
  isOpen,
  onClose,
  cart = [],
  setCart,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const updateQuantity = (id, change) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(
                  1,
                  (item.quantity || 1) + change
                ),
              }
            : item
        )
    );
  };

  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-5">
          <h2 className="text-xl font-black">
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-xl transition hover:bg-black hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="text-5xl">🛒</div>

              <h3 className="mt-5 text-xl font-black">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Add some products to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-2xl bg-gray-100 object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-1 font-bold">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, -1)
                        }
                        className="h-8 w-8 rounded-full border"
                      >
                        −
                      </button>

                      <span className="font-bold">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, 1)
                        }
                        className="h-8 w-8 rounded-full border"
                      >
                        +
                      </button>

                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="ml-auto text-xs font-bold text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-5">
            <div className="flex justify-between text-lg font-black">
              <span>Total</span>

              <span>
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              onClick={() =>
                alert("Checkout will be available soon.")
              }
              className="mt-5 w-full rounded-full bg-black py-4 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;