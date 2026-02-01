import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { IconSidebar } from "@/components/layout/IconSidebar";
import { Header } from "@/components/layout/Header";
import { ChatView } from "@/components/chat/ChatView";
import { PreviewPane } from "@/components/layout/PreviewPane";

// Placeholder views for other routes
const PlaceholderView = ({ title }: { title: string }) => (
  <div className="flex-1 flex items-center justify-center text-muted-foreground bg-muted/20">
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState("chat");
  const [previewContent, setPreviewContent] = useState<any>(null); // State for the right preview pane

  // Sync internal state with URL location
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setActivePage(path || "chat");
  }, [location]);

  return (
    <div className="flex h-screen bg-background text-foreground font-sans overflow-hidden">

      {/* 1. Narrow Icon Sidebar */}
      <IconSidebar
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          navigate(`/${page}`);
        }}
      />

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header />

        <div className="flex-1 flex relative overflow-hidden">
          {/* Central Workspace */}
          <div className="flex-1 flex flex-col min-w-0 bg-background">
            <Routes>
              <Route path="/" element={<Navigate to="/chat" replace />} />
              <Route path="/chat" element={<ChatView />} />
              <Route path="/history" element={<PlaceholderView title="History" />} />
              <Route path="/settings" element={<PlaceholderView title="Settings" />} />
              <Route path="*" element={<PlaceholderView title="Not Found" />} />
            </Routes>
          </div>

          {/* Right Preview Pane (Conditional) */}
          {previewContent && (
            <PreviewPane
              content={previewContent}
              onClose={() => setPreviewContent(null)}
            />
          )}
        </div>
      </main>

    </div>
  );
}

export default App;
