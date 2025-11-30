import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { investorAuthService } from "../services/investorAuth";
import { documentService, DocumentMetadata } from "../services/documentService";
import "./InvestorDashboard.css";

interface DashboardMetrics {
  waitlistCount: number;
  weeklyGrowth: number;
  ctr: number;
  lastUpdated: string;
}

export const InvestorDashboard: React.FC = () => {
  const [user, setUser] = useState<{ email: string; sessionId: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "documents" | "dataroom"
  >("overview");
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [documents, setDocuments] = useState<DocumentMetadata[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeDashboard = async () => {
      // Check authentication
      const authResult = await investorAuthService.validateSession();

      if (!authResult.success) {
        navigate("/investors", { replace: true });
        return;
      }

      const currentUser = investorAuthService.getCurrentUser();
      if (!currentUser) {
        navigate("/investors", { replace: true });
        return;
      }

      setUser(currentUser);
      await loadDashboardData();
      setIsLoading(false);
    };

    initializeDashboard();
  }, [navigate]);

  const loadDashboardData = async () => {
    // Simulate loading metrics and documents
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock metrics data
    setMetrics({
      waitlistCount: 2847,
      weeklyGrowth: 12.5,
      ctr: 8.7,
      lastUpdated: new Date().toISOString(),
    });

    // Load documents from document service
    setDocuments(documentService.getInvestorDocuments());
  };

  const handleLogout = async () => {
    await investorAuthService.logout();
    navigate("/investors", { replace: true });
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const handleDocumentAccess = (document: DocumentMetadata) => {
    if (!user) return;

    // Check if user has access to restricted documents
    if (
      document.restricted &&
      !documentService.hasDocumentAccess(document.id, user.email)
    ) {
      alert(
        "This document requires additional verification. Please contact us for access."
      );
      return;
    }

    // Log the access
    documentService.logDocumentAccess(document.id, user.email);

    // Generate watermarked URL if needed (currently just showing access info)
    // const accessUrl = document.watermarkRequired
    //   ? documentService.generateWatermarkedUrl(document.id, user.email)
    //   : document.url;

    // For demo, show access information
    const accessInfo = [
      `Document: ${document.title}`,
      `Viewer: ${user.email}`,
      `Watermarked: ${document.watermarkRequired ? "Yes" : "No"}`,
      `Timestamp: ${new Date().toISOString()}`,
    ].join("\n");

    alert(`Document access logged:\n\n${accessInfo}`);

    // In production, open the document
    // window.open(accessUrl, '_blank');
  };

  if (isLoading) {
    return (
      <div className="investor-dashboard loading">
        <div className="loading-container">
          <div className="spinner-large"></div>
          <p>Loading investor portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="investor-dashboard">
      {/* SEO blocking headers */}
      <div style={{ display: "none" }}>
        <meta name="robots" content="noindex, nofollow" />
      </div>

      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="grape-logo">🍇</div>
            <div className="header-text">
              <h1>Investor Portal</h1>
              <p>Welcome back, {user?.email}</p>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="calendly-btn"
              onClick={() =>
                window.open(
                  "https://calendly.com/grape-banking/investor-chat",
                  "_blank"
                )
              }
            >
              📅 Schedule Meeting
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav className="dashboard-nav">
        <div className="nav-content">
          <button
            className={`nav-tab ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            📊 Overview
          </button>
          <button
            className={`nav-tab ${activeTab === "documents" ? "active" : ""}`}
            onClick={() => setActiveTab("documents")}
          >
            📄 Documents
          </button>
          <button
            className={`nav-tab ${activeTab === "dataroom" ? "active" : ""}`}
            onClick={() => setActiveTab("dataroom")}
          >
            🔒 Data Room
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        {activeTab === "overview" && (
          <div className="overview-tab">
            <div className="metrics-grid">
              {metrics && (
                <>
                  <div className="metric-card">
                    <div className="metric-icon">👥</div>
                    <div className="metric-content">
                      <h3>Waitlist Count</h3>
                      <p className="metric-value">
                        {formatNumber(metrics.waitlistCount)}
                      </p>
                      <span className="metric-change positive">
                        +{metrics.weeklyGrowth}% this week
                      </span>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-icon">📈</div>
                    <div className="metric-content">
                      <h3>Conversion Rate</h3>
                      <p className="metric-value">{metrics.ctr}%</p>
                      <span className="metric-change positive">
                        +2.1% vs last month
                      </span>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-icon">💰</div>
                    <div className="metric-content">
                      <h3>Pipeline Value</h3>
                      <p className="metric-value">$1.2M</p>
                      <span className="metric-change">
                        From 24 qualified leads
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="updates-section">
              <h2>Recent Updates</h2>
              <div className="update-card">
                <div className="update-date">Nov 20, 2024</div>
                <h3>Series Seed Funding Round Progress</h3>
                <p>
                  We've successfully closed $500K of our $2M Series Seed round
                  with strong interest from strategic investors. Updated pitch
                  deck and financial projections now available in the documents
                  section.
                </p>
              </div>

              <div className="update-card">
                <div className="update-date">Nov 15, 2024</div>
                <h3>Product Development Milestone</h3>
                <p>
                  Completed AI spending categorization engine with 94% accuracy.
                  Beta testing shows 40% improvement in user financial awareness
                  compared to traditional banking apps.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="documents-tab">
            <div className="documents-header">
              <h2>Investment Documents</h2>
              <p>Access key documents for your investment evaluation</p>
            </div>

            <div className="documents-grid">
              {documents.map((doc) => (
                <div key={doc.id} className="document-card">
                  <div className="document-icon">
                    {doc.type === "pdf" && "📄"}
                    {doc.type === "video" && "🎥"}
                    {doc.type === "link" && "🔗"}
                    {doc.type === "spreadsheet" && "📊"}
                  </div>

                  <div className="document-content">
                    <h3>{doc.title}</h3>
                    <p>{doc.description}</p>

                    <div className="document-meta">
                      {doc.size && <span>Size: {doc.size}</span>}
                      <span>
                        Updated:{" "}
                        {new Date(doc.lastModified).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <button
                    className="document-access-btn"
                    onClick={() => handleDocumentAccess(doc)}
                  >
                    {doc.restricted ? "🔒 Request Access" : "📖 View"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "dataroom" && (
          <div className="dataroom-tab">
            <div className="dataroom-header">
              <h2>Secure Data Room</h2>
              <p>Confidential business information and detailed analytics</p>
            </div>

            <div className="dataroom-sections">
              {/* Market Analysis Documents */}
              <div className="dataroom-section">
                <h3>📊 Market Analysis</h3>
                <div className="dataroom-items">
                  {documentService
                    .getDataRoomDocuments()
                    .filter((doc) => doc.category === "market")
                    .map((doc) => (
                      <div key={doc.id} className="dataroom-item">
                        <span>{doc.title}</span>
                        <button
                          className={`access-btn ${
                            doc.restricted ? "restricted" : ""
                          }`}
                          onClick={() => handleDocumentAccess(doc)}
                        >
                          {doc.restricted ? "🔒 Restricted" : "View Document"}
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Operations Documents */}
              <div className="dataroom-section">
                <h3>🏢 Operations</h3>
                <div className="dataroom-items">
                  {documentService
                    .getDataRoomDocuments()
                    .filter((doc) =>
                      ["product", "financial"].includes(doc.category)
                    )
                    .map((doc) => (
                      <div key={doc.id} className="dataroom-item">
                        <span>{doc.title}</span>
                        <button
                          className={`access-btn ${
                            doc.restricted ? "restricted" : ""
                          }`}
                          onClick={() => handleDocumentAccess(doc)}
                        >
                          {doc.restricted ? "🔒 Restricted" : "View Document"}
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              {/* Legal & Compliance Documents */}
              <div className="dataroom-section">
                <h3>🔒 Legal & Compliance</h3>
                <div className="dataroom-items">
                  {documentService
                    .getDataRoomDocuments()
                    .filter((doc) => doc.category === "legal")
                    .map((doc) => (
                      <div key={doc.id} className="dataroom-item">
                        <span>{doc.title}</span>
                        <button
                          className={`access-btn ${
                            doc.restricted ? "restricted" : ""
                          }`}
                          onClick={() => handleDocumentAccess(doc)}
                        >
                          {doc.restricted ? "🔒 Restricted" : "View Document"}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="subscription-section">
              <div className="subscription-card">
                <h3>📬 Monthly Investor Updates</h3>
                <p>
                  Receive detailed monthly reports on metrics, progress, and
                  strategic updates directly to your inbox.
                </p>
                <button className="subscribe-btn">Subscribe to Updates</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default InvestorDashboard;
