function ProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gray-100">
      <div className="aspect-square animate-pulse bg-gray-200" />

      <div className="space-y-3 bg-white p-5">
        <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />

        <div className="h-10 w-full animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
}

export default ProductSkeleton;