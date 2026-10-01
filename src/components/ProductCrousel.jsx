import { useState } from "react";

function ProductCarousel({ images = [], productName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-gray-100">
        No image available
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={productName}
          className="aspect-square w-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image + index}
              onClick={() => setCurrentIndex(index)}
              className={`overflow-hidden rounded-xl border-2 ${
                currentIndex === index
                  ? "border-black"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="h-16 w-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;