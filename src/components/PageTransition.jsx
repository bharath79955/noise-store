import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

export default function PageTransition({ children }) {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <PageLoader />;
  }

  return children;
}