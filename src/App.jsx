import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const noFooterRoutes = ["/quiz"];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // важный момент: разные страницы будут анимироваться
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
