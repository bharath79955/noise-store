import React from "react";

const LoadingSkeleton = ({ type = "product" }) => {
  if (type === "details") {
    return (
      <section className="min-h-screen bg-gray-50 px-5 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-center justify-center">
            <div className="loading-spinner" />
            <span className="ml-3 font-semibold text-gray-600 dark:text-gray-300">
              Loading product...
            </span>
          </div>

          <div className="grid gap-12 md:grid-cols-2">

            <div className="skeleton h-[450px] w-full rounded-3xl" />

            <div className="space-y-5">
              <div className="skeleton h-5 w-28 rounded" />
              <div className="skeleton h-12 w-4/5 rounded" />
              <div className="skeleton h-5 w-full rounded" />
              <div className="skeleton h-5 w-full rounded" />
              <div className="skeleton h-5 w-3/4 rounded" />
              <div className="skeleton h-10 w-32 rounded" />
              <div className="skeleton h-14 w-48 rounded-full" />
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-gray-900">

      <div className="skeleton h-72 w-full" />

      <div className="space-y-4 p-6">
        <div className="skeleton h-4 w-24 rounded" />
        <div className="skeleton h-7 w-4/5 rounded" />
        <div className="skeleton h-5 w-24 rounded" />

        <div className="flex gap-3">
          <div className="skeleton h-7 w-24 rounded" />
          <div className="skeleton h-7 w-16 rounded" />
        </div>

        <div className="skeleton h-12 w-full rounded-full" />
      </div>

    </div>
  );
};

export default LoadingSkeleton;