import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      
      <ScrollToTop />

      <Navbar />

      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;