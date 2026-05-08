import {
  Shield,
  Mail,
  Users,
  Share2,
  MessageSquare,
  HardDrive,
  Sparkles,
  Settings,
  Bell,
  Moon,
  Search,
} from "lucide-react";

import "./index.css";

const services = [
  {
    title: "Exchange",
    description: "Manage mailboxes and transport rules",
    icon: <Mail size={28} />,
  },
  {
    title: "SharePoint",
    description: "Manage sites and sharing",
    icon: <Share2 size={28} />,
  },
  {
    title: "Teams",
    description: "Manage meetings and policies",
    icon: <MessageSquare size={28} />,
  },
  {
    title: "OneDrive",
    description: "Manage storage and sharing",
    icon: <HardDrive size={28} />,
  },
  {
    title: "Entra ID",
    description: "Manage identities and groups",
    icon: <Users size={28} />,
  },
  {
    title: "Security",
    description: "Security and compliance",
    icon: <Shield size={28} />,
  },
];

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <span className="purple">M365</span> Admin Agent
        </div>

        <nav>
          <div className="nav-item active">Home</div>
          <div className="nav-item">Dashboard</div>
          <div className="nav-item">Users</div>
          <div className="nav-item">Groups</div>
          <div className="nav-item">Devices</div>
          <div className="nav-item">Security</div>
        </nav>

        <div className="sidebar-footer">
          <div className="nav-item">
            <Settings size={18} />
            Settings
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search..." />
          </div>

          <div className="topbar-actions">
            <Moon size={20} />
            <Bell size={20} />
          </div>
        </header>

        <section className="hero">
          <div>
            <h1>Welcome to M365 Admin Agent 👋</h1>

            <p>AI-powered Microsoft 365 administration</p>
          </div>

          <div className="hero-icon">
            <Sparkles size={80} />
          </div>
        </section>

        <h2 className="section-title">Microsoft 365 Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="card-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      <aside className="assistant-panel">
        <h2>M365 Assistant</h2>

        <div className="assistant-box">
          <p>Ask questions about your Microsoft 365 environment.</p>
        </div>

        <div className="chat-box">
          <input placeholder="Ask a question..." />

          <button>Send</button>
        </div>
      </aside>
    </div>
  );
}

export default App;
