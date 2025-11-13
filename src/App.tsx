import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Security } from "./pages/Security";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { Download } from "./pages/Download";
import { EarlyAccess } from "./pages/EarlyAccess";
import { Investors } from "./pages/Investors";
import { Press } from "./pages/Press";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Legal } from "./pages/Legal";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/download" element={<Download />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/press" element={<Press />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/disclosures" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
