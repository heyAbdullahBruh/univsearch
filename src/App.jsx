import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useThemeStore } from "@/store/themeStore";

export default function App() {
  const location = useLocation();
  const init = useThemeStore((state) => state.init);

  useEffect(() => {
    if (typeof init === "function") {
      init();
    }
    window.scrollTo(0, 0);
  }, [location.pathname, init]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
