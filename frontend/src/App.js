import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HikePage from "./pages/HikePage";
import GetTherePage from "./pages/GetTherePage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";
import LiveCameraPage from "./pages/LiveCameraPage";
import BookVillaPage from "./pages/BookVillaPage";
import TravelAgenciesPage from "./pages/TravelAgenciesPage";
import DisclaimerPage from "./pages/DisclaimerPage";

// Scroll to top on route change
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* === PRIMARY ROUTES — match exact sitemap URLs === */}
          {/* Homepage — all variants resolve here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/Home.html" element={<HomePage />} />

          {/* Core content pages — exact .html URLs preserved */}
          <Route path="/The-Hike.html" element={<HikePage />} />
          <Route path="/How-to-get-there.html" element={<GetTherePage />} />
          <Route path="/FAQ.html" element={<FAQPage />} />

          {/* Live cameras */}
          <Route path="/Live-camera.html" element={<LiveCameraPage camera="entrance" />} />
          <Route path="/Live-Camera-Omalos.html" element={<LiveCameraPage camera="omalos" />} />
          <Route path="/Live-Camera-Samaria.html" element={<LiveCameraPage camera="samaria" />} />

          {/* Villa */}
          <Route path="/BookVilla.html" element={<BookVillaPage />} />

          {/* Travel Agencies */}
          <Route path="/Travel-Agencies-Chania.html" element={<TravelAgenciesPage city="chania" />} />
          <Route path="/Travel-Agencies-Rethymnon.html" element={<TravelAgenciesPage city="rethymnon" />} />
          <Route path="/Travel-Agencies-Heraklion.html" element={<TravelAgenciesPage city="heraklion" />} />

          {/* Disclaimer */}
          <Route path="/Disclaimer.html" element={<DisclaimerPage />} />

          {/* NenDirections — low priority, redirect to How-to-get-there */}
          <Route path="/NenDirections.html" element={<Navigate to="/How-to-get-there.html" replace />} />

          {/* Gallery (new page, not in original sitemap) */}
          <Route path="/Gallery.html" element={<GalleryPage />} />

          {/* Legacy slug fallback redirects */}
          <Route path="/hike" element={<Navigate to="/The-Hike.html" replace />} />
          <Route path="/get-there" element={<Navigate to="/How-to-get-there.html" replace />} />
          <Route path="/faq" element={<Navigate to="/FAQ.html" replace />} />
          <Route path="/gallery" element={<Navigate to="/Gallery.html" replace />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
