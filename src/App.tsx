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
import { InvestorLogin } from "./pages/InvestorLogin";
import { InvestorDashboard } from "./pages/InvestorDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Press } from "./pages/Press";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Legal } from "./pages/Legal";
import "./styles/global.css";

// Layout component for public pages
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          {/* Public routes with header/footer */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/features"
            element={
              <PublicLayout>
                <Features />
              </PublicLayout>
            }
          />
          <Route
            path="/security"
            element={
              <PublicLayout>
                <Security />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/help"
            element={
              <PublicLayout>
                <Help />
              </PublicLayout>
            }
          />
          <Route
            path="/download"
            element={
              <PublicLayout>
                <Download />
              </PublicLayout>
            }
          />
          <Route
            path="/early-access"
            element={
              <PublicLayout>
                <EarlyAccess />
              </PublicLayout>
            }
          />
          <Route
            path="/press"
            element={
              <PublicLayout>
                <Press />
              </PublicLayout>
            }
          />
          <Route
            path="/legal/privacy"
            element={
              <PublicLayout>
                <Privacy />
              </PublicLayout>
            }
          />
          <Route
            path="/legal/terms"
            element={
              <PublicLayout>
                <Terms />
              </PublicLayout>
            }
          />
          <Route
            path="/legal/disclosures"
            element={
              <PublicLayout>
                <Legal />
              </PublicLayout>
            }
          />

          {/* Investor portal routes (no header/footer for security) */}
          <Route
            path="/investors"
            element={
              <ProtectedRoute requireAuth={false}>
                <InvestorLogin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investors/auth"
            element={
              <ProtectedRoute requireAuth={false}>
                <InvestorLogin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investors/dashboard"
            element={
              <ProtectedRoute requireAuth={true}>
                <InvestorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
