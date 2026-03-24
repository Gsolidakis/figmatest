import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HikePage from "./pages/HikePage";
import GetTherePage from "./pages/GetTherePage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hike" element={<HikePage />} />
        <Route path="/get-there" element={<GetTherePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
