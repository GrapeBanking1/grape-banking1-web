import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { investorAuthService } from "../services/investorAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      if (!requireAuth) {
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      }

      try {
        const result = await investorAuthService.validateSession();
        setIsAuthenticated(result.success);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [requireAuth, location.pathname]);

  // Add SEO protection headers
  useEffect(() => {
    if (requireAuth) {
      // Set meta tags for SEO blocking
      const existingRobots = document.querySelector('meta[name="robots"]');
      if (existingRobots) {
        existingRobots.setAttribute("content", "noindex, nofollow");
      } else {
        const robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        robotsMeta.content = "noindex, nofollow";
        document.head.appendChild(robotsMeta);
      }

      // Add X-Robots-Tag equivalent via meta
      const xRobotsMeta = document.createElement("meta");
      xRobotsMeta.httpEquiv = "X-Robots-Tag";
      xRobotsMeta.content = "noindex, nofollow";
      document.head.appendChild(xRobotsMeta);

      // Cleanup on unmount
      return () => {
        const robotsMeta = document.querySelector('meta[name="robots"]');
        const xRobotsMeta = document.querySelector(
          'meta[http-equiv="X-Robots-Tag"]'
        );

        if (robotsMeta) {
          robotsMeta.setAttribute("content", "index, follow"); // Reset to default
        }
        if (xRobotsMeta) {
          document.head.removeChild(xRobotsMeta);
        }
      };
    }
  }, [requireAuth]);

  if (isLoading) {
    return (
      <div className="protected-route-loading">
        <div className="loading-container">
          <div className="spinner-large"></div>
          <p>Verifying access...</p>
        </div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    // Redirect to login with return URL
    const returnUrl = location.pathname + location.search;
    return (
      <Navigate
        to={`/investors?return=${encodeURIComponent(returnUrl)}`}
        replace
      />
    );
  }

  return <>{children}</>;
};

// Component for loading state styling
const LoadingStyles = `
.protected-route-loading {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.loading-container {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 60px 40px;
}

.spinner-large {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #845ec2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Inject styles
const styleElement = document.createElement("style");
styleElement.textContent = LoadingStyles;
document.head.appendChild(styleElement);

export default ProtectedRoute;
