import toast from "react-hot-toast";

function WishlistButton({
  product,
  wishlist = [],
  setWishlist,
}) {
  const isWishlisted = wishlist.includes(product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      setWishlist((current) =>
        current.filter((id) => id !== product.id)
      );

      toast.success("Removed from wishlist");
    } else {
      setWishlist((current) => [
        ...current,
        product.id,
      ]);

      toast.success("Added to wishlist ❤️");
    }
  };

  return (
    <button
      onClick={handleWishlist}
      aria-label="Toggle wishlist"
      title={
        isWishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
        isWishlisted
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white hover:border-black"
      }`}
    >
      {isWishlisted ? "♥" : "♡"}
    </button>
  );
}

export default WishlistButton;