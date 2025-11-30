export interface DocumentMetadata {
  id: string;
  title: string;
  type: "pdf" | "video" | "link" | "spreadsheet";
  size?: string;
  lastModified: string;
  description: string;
  url: string;
  restricted: boolean;
  category: "pitch" | "financial" | "legal" | "product" | "market";
  watermarkRequired: boolean;
}

export interface DocumentAccess {
  documentId: string;
  userEmail: string;
  accessedAt: number;
  ipAddress?: string;
  userAgent?: string;
}

class DocumentService {
  private accessLog: DocumentAccess[] = [];

  /**
   * Gets all available documents for investor portal
   */
  getInvestorDocuments(): DocumentMetadata[] {
    return [
      {
        id: "pitch-deck-2024",
        title: "Pitch Deck - Series Seed",
        type: "pdf",
        size: "3.2 MB",
        lastModified: "2024-11-15",
        description:
          "Complete investor presentation including market analysis, product roadmap, and financial projections",
        url: "/docs/grape-pitch-deck-2024.pdf",
        restricted: false,
        category: "pitch",
        watermarkRequired: true,
      },
      {
        id: "executive-summary",
        title: "Executive Summary",
        type: "pdf",
        size: "1.1 MB",
        lastModified: "2024-11-10",
        description:
          "One-page overview of Grape's value proposition and investment opportunity",
        url: "/docs/grape-executive-summary.pdf",
        restricted: false,
        category: "pitch",
        watermarkRequired: true,
      },
      {
        id: "product-roadmap",
        title: "Product Roadmap 2025-2026",
        type: "pdf",
        size: "2.8 MB",
        lastModified: "2024-11-12",
        description:
          "Detailed product development timeline and feature releases",
        url: "/docs/grape-product-roadmap.pdf",
        restricted: false,
        category: "product",
        watermarkRequired: true,
      },
      {
        id: "security-overview",
        title: "Security & Compliance Overview",
        type: "pdf",
        size: "1.9 MB",
        lastModified: "2024-11-08",
        description:
          "Security architecture, compliance frameworks, and data protection measures",
        url: "/docs/grape-security-overview.pdf",
        restricted: false,
        category: "legal",
        watermarkRequired: false,
      },
      {
        id: "demo-video",
        title: "Product Demo Video",
        type: "video",
        size: "42 MB",
        lastModified: "2024-11-14",
        description:
          "3-minute demonstration of core banking features and AI capabilities",
        url: "/videos/grape-product-demo.mp4",
        restricted: false,
        category: "product",
        watermarkRequired: false,
      },
      {
        id: "financial-model",
        title: "Financial Model & projections",
        type: "spreadsheet",
        size: "2.1 MB",
        lastModified: "2024-11-16",
        description:
          "Detailed financial projections, unit economics, and growth scenarios",
        url: "/docs/grape-financial-model.xlsx",
        restricted: true,
        category: "financial",
        watermarkRequired: true,
      },
      {
        id: "market-research",
        title: "Market Research Report",
        type: "pdf",
        size: "8.7 MB",
        lastModified: "2024-11-05",
        description:
          "Comprehensive market analysis including TAM/SAM/SOM and competitive landscape",
        url: "/docs/grape-market-research.pdf",
        restricted: false,
        category: "market",
        watermarkRequired: true,
      },
    ];
  }

  /**
   * Gets data room documents (more restricted)
   */
  getDataRoomDocuments(): DocumentMetadata[] {
    return [
      {
        id: "tam-sam-som",
        title: "TAM/SAM/SOM Analysis",
        type: "pdf",
        size: "4.2 MB",
        lastModified: "2024-11-08",
        description:
          "Total addressable market analysis with detailed breakdowns",
        url: "/dataroom/tam-sam-som-analysis.pdf",
        restricted: false,
        category: "market",
        watermarkRequired: true,
      },
      {
        id: "competitor-matrix",
        title: "Competitive Analysis Matrix",
        type: "pdf",
        size: "3.1 MB",
        lastModified: "2024-11-10",
        description: "Detailed competitive landscape and positioning analysis",
        url: "/dataroom/competitor-analysis.pdf",
        restricted: false,
        category: "market",
        watermarkRequired: true,
      },
      {
        id: "hiring-plan",
        title: "Hiring Plan & Team Expansion",
        type: "pdf",
        size: "1.8 MB",
        lastModified: "2024-11-12",
        description: "Detailed hiring roadmap and organizational structure",
        url: "/dataroom/hiring-plan.pdf",
        restricted: false,
        category: "product",
        watermarkRequired: true,
      },
      {
        id: "use-of-funds",
        title: "Use of Funds Breakdown",
        type: "pdf",
        size: "2.3 MB",
        lastModified: "2024-11-14",
        description:
          "Detailed allocation of investment funds across departments",
        url: "/dataroom/use-of-funds.pdf",
        restricted: false,
        category: "financial",
        watermarkRequired: true,
      },
      {
        id: "compliance-roadmap",
        title: "Regulatory Compliance Roadmap",
        type: "pdf",
        size: "3.9 MB",
        lastModified: "2024-11-06",
        description:
          "Banking compliance requirements and implementation timeline",
        url: "/dataroom/compliance-roadmap.pdf",
        restricted: false,
        category: "legal",
        watermarkRequired: true,
      },
      {
        id: "corporate-structure",
        title: "Corporate Structure",
        type: "pdf",
        size: "1.2 MB",
        lastModified: "2024-11-01",
        description: "Legal entity structure and capitalization table",
        url: "/dataroom/corporate-structure.pdf",
        restricted: true,
        category: "legal",
        watermarkRequired: true,
      },
      {
        id: "ip-portfolio",
        title: "Intellectual Property Portfolio",
        type: "pdf",
        size: "2.7 MB",
        lastModified: "2024-10-28",
        description: "Patents, trademarks, and proprietary technology overview",
        url: "/dataroom/ip-portfolio.pdf",
        restricted: false,
        category: "legal",
        watermarkRequired: true,
      },
    ];
  }

  /**
   * Logs document access for audit purposes
   */
  logDocumentAccess(documentId: string, userEmail: string): void {
    const access: DocumentAccess = {
      documentId,
      userEmail,
      accessedAt: Date.now(),
      ipAddress: "xxx.xxx.xxx.xxx", // In production, get real IP
      userAgent: navigator.userAgent,
    };

    this.accessLog.push(access);
  }

  /**
   * Generates watermarked document URL (simulation)
   */
  generateWatermarkedUrl(documentId: string, userEmail: string): string {
    // In production, this would integrate with PDF watermarking service
    const baseUrl = this.getDocument(documentId)?.url;
    if (!baseUrl) return "";

    // Simulate watermarked URL generation
    const watermarkParams = new URLSearchParams({
      viewer: btoa(userEmail),
      timestamp: Date.now().toString(),
      signature: this.generateSignature(documentId, userEmail),
    });

    return `${baseUrl}?${watermarkParams.toString()}`;
  }

  /**
   * Gets a specific document by ID
   */
  getDocument(documentId: string): DocumentMetadata | null {
    const allDocs = [
      ...this.getInvestorDocuments(),
      ...this.getDataRoomDocuments(),
    ];
    return allDocs.find((doc) => doc.id === documentId) || null;
  }

  /**
   * Checks if user has access to a restricted document
   */
  hasDocumentAccess(documentId: string, userEmail: string): boolean {
    const document = this.getDocument(documentId);
    if (!document) return false;

    // For now, all authenticated investors have access to non-restricted documents
    // In production, implement granular permission system
    if (!document.restricted) return true;

    // Check if user has special access to restricted documents
    // This could be based on investment amount, due diligence status, etc.
    const restrictedAccessEmails: string[] = [
      // Add specific emails that should have access to restricted documents
    ];

    return restrictedAccessEmails.includes(userEmail.toLowerCase());
  }

  /**
   * Gets access statistics for analytics
   */
  getAccessStats(): {
    totalAccesses: number;
    uniqueUsers: number;
    mostAccessedDocuments: { documentId: string; count: number }[];
    recentAccesses: DocumentAccess[];
  } {
    const uniqueUsers = new Set(this.accessLog.map((log) => log.userEmail))
      .size;

    const documentCounts = this.accessLog.reduce((acc, log) => {
      acc[log.documentId] = (acc[log.documentId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const mostAccessed = Object.entries(documentCounts)
      .map(([documentId, count]) => ({ documentId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const recentAccesses = this.accessLog
      .slice(-10)
      .sort((a, b) => b.accessedAt - a.accessedAt);

    return {
      totalAccesses: this.accessLog.length,
      uniqueUsers,
      mostAccessedDocuments: mostAccessed,
      recentAccesses,
    };
  }

  /**
   * Generates signature for document access (simplified)
   */
  private generateSignature(documentId: string, userEmail: string): string {
    // In production, use proper cryptographic signing
    const data = `${documentId}:${userEmail}:${Date.now()}`;
    return btoa(data).substring(0, 16);
  }
}

// Export singleton instance
export const documentService = new DocumentService();
