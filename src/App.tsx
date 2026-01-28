import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";
import { Cookies } from "./pages/Cookies";
import { Terms } from "./pages/Terms";
import { CompanyDetails } from "./pages/CompanyDetails";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element after a short delay
      // to ensure the page has loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Otherwise scroll to top immediately
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/company-details" element={<CompanyDetails />} />
    </Routes>
    <Analytics />
    </>
  );
}

export default App;
