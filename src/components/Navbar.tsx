import React from 'react';
import { Menu, X, Zap, Settings, Bell, User } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <nav className="bg-[var(--surface)] border-b border-[var(--primary-dark)] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="mr-4 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center">
          <Zap className="text-[var(--primary)] mr-2" size={24} />
          <h1 className="text-xl font-bold neon-text">CYBER<span className="neon-text-secondary">PULSE</span></h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-[var(--text-dim)] hover:text-[var(--primary)] transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-[var(--text-dim)] hover:text-[var(--primary)] transition-colors">
          <Settings size={20} />
        </button>
        <div className="flex items-center ml-4">
          <div className="w-8 h-8 rounded-full bg-[var(--primary-dark)] flex items-center justify-center">
            <User size={16} className="text-[var(--background)]" />
          </div>
          <span className="ml-2 text-sm hidden md:inline-block">ADMIN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;