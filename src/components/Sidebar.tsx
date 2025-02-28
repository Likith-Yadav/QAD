import React from 'react';
import { 
  LayoutDashboard, 
  Cpu, 
  BarChart2, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  LogOut,
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'prototyping', label: 'Prototyping', icon: <Cpu size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} /> },
    { id: 'chatbot', label: 'Chatbot', icon: <MessageSquare size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-full bg-[var(--surface)] border-r border-[var(--primary-dark)] transition-all duration-300 z-10 pt-16 ${
        isOpen ? 'w-64' : 'w-0 -translate-x-full md:w-16 md:translate-x-0'
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {isOpen && (
            <div className="px-4 py-6 border-b border-[var(--primary-dark)]">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-dark)] flex items-center justify-center">
                  <Zap size={24} className="text-[var(--background)]" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[var(--primary)]">Adora Quantum<span className="text-[var(--secondary)]"> Desk</span></h3>
                <p className="text-xs text-[var(--text-dim)]">v1.0.0</p>
              </div>
            </div>
          )}
          
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.id} className="mb-1">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-3 transition-colors ${
                    activeTab === item.id
                      ? 'bg-[var(--surface-light)] text-[var(--primary)] border-l-2 border-[var(--primary)]'
                      : 'text-[var(--text-dim)] hover:bg-[var(--surface-light)] hover:text-[var(--text)]'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {isOpen && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pb-6">
          <ul>
            <li>
              <button className="flex items-center w-full px-4 py-3 text-[var(--text-dim)] hover:bg-[var(--surface-light)] hover:text-[var(--text)] transition-colors">
                <span className="mr-3"><HelpCircle size={20} /></span>
                {isOpen && <span>Help</span>}
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-3 text-[var(--danger)] hover:bg-[var(--surface-light)] transition-colors">
                <span className="mr-3"><LogOut size={20} /></span>
                {isOpen && <span>Logout</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;