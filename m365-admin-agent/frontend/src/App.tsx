```tsx
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
    description: "Manage sites, permissions and sharing",
    icon: <Share2 size={28} />,
  },
  {
    title: "Teams",
    description: "Manage teams, meetings and policies",
    icon: <MessageSquare size={28} />,
  },
  {
    title: "OneDrive",
    description: "Manage OneDrive storage and sharing",
    icon: <HardDrive size={28} />,
  },
  {
    title: "Entra ID",
    description: "Manage identities, groups and roles",
    icon: <Users size={28} />,
  },
  {
    title: "Security",
    description: "Security and compliance management",
    icon: <Shield size={28} />,
  },
];

function App() {
  return (
    <div className="app">
      {/* Sidebar */}

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
          <div className="nav-item">Compliance</div>
        </nav>

        <div className="sidebar-footer">
          <div className="nav-item">
            <Settings size={18} />
            Settings
          </div>
        </div>
      </aside>

      {/* Main */}

      <main className="main-content">
        {/* Top Bar */}

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

        {/* Hero */}

        <section className="hero">
          <div>
            <h1>Welcome to M365 Admin Agent 👋</h1>

            <p>
              AI-powered Microsoft 365 administration platform
            </p>
          </div>

          <div className="hero-icon">
            <Sparkles size={80} />
          </div>
        </section>

        {/* Services */}

        <h2 className="section-title">
          Microsoft 365 Services
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="card-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}

        <h2 className="section-title">
          Tenant Overview
        </h2>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Users</span>
            <h3>12,842</h3>
          </div>

          <div className="stat-card">
            <span>Groups</span>
            <h3>1,256</h3>
          </div>

          <div className="stat-card">
            <span>Teams</span>
            <h3>982</h3>
          </div>

          <div className="stat-card">
            <span>SharePoint Sites</span>
            <h3>1,432</h3>
          </div>
        </div>
      </main>

      {/* Assistant Panel */}

      <aside className="assistant-panel">
        <h2>M365 Admin Assistant</h2>

        <div className="assistant-box">
          <p>
            Ask me anything about your Microsoft 365
            environment.
          </p>

          <ul>
            <li>Show disabled users</li>
            <li>Mailbox forwarding rules</li>
            <li>Teams policy review</li>
            <li>External sharing review</li>
          </ul>
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
```
