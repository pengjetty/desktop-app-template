import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900/50 border-r border-slate-800/50 flex flex-col backdrop-blur-xl">
        <div className="p-6 border-b border-slate-800/50">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Agent App
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {["dashboard", "settings", "logs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 capitalize ${activeTab === tab
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                  : "hover:bg-slate-800/50 text-slate-400 hover:text-slate-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/50">
          <div className="text-xs text-slate-500">
            src-api: <span className="text-emerald-500/80">Pending</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <header className="h-16 border-b border-slate-800/50 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-slate-200 font-medium capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-slate-900"></div>
          </div>
        </header>

        <div className="p-8">
          {/* Content Area */}
          <div className="p-6 rounded-2xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-slate-100 mb-2">Welcome to your new agent</h3>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              This is a template using the Desktop Agent Architecture.
              <br />
              Stack: Tauri v2, React 19, Tailwind v4, Vite.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <div className="text-slate-500 text-sm mb-1">Architecture</div>
                <div className="font-mono text-xs text-indigo-300">/src-tauri</div>
                <div className="font-mono text-xs text-indigo-300">/src-api (Node Sidecar)</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
