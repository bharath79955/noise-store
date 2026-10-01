import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function PageLoader() {
  const { darkMode } = useTheme();

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: darkMode ? "#050505" : "#ffffff",
      }}
    >
      <div className="flex flex-col items-center">

        {/* NOISE LOGO */}
        <div
          className="text-4xl font-bold tracking-[-0.06em] sm:text-5xl"
          style={{
            color: darkMode ? "#ffffff" : "#111111",
          }}
        >
          NOISE
        </div>

        {/* BLUE LINE */}
        <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div className="loader-bar h-full rounded-full bg-blue-600" />
        </div>

        {/* TEXT */}
        <p
          className="mt-4 text-sm font-medium"
          style={{
            color: darkMode ? "#9ca3af" : "#6b7280",
          }}
        >
          Loading...
        </p>

      </div>
    </div>
  );
}