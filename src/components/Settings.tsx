import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, RefreshCw, Wifi, Bell, Shield, Database, Monitor } from 'lucide-react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    alerts: true,
    updates: true,
    status: false,
    analytics: true
  });
  
  const [wifiSettings, setWifiSettings] = useState({
    ssid: 'CyberNet_5G',
    security: 'WPA2',
    channel: '6',
    autoConnect: true
  });
  
  const [displaySettings, setDisplaySettings] = useState({
    theme: 'dark',
    refreshRate: '5',
    animations: true,
    dataFormat: 'metric'
  });
  
  const [securitySettings, setSecuritySettings] = useState({
    encryption: true,
    firewall: true,
    accessControl: true,
    secureBootloader: false
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <SettingsIcon className="mr-2 text-[var(--primary)]" />
          System Settings
        </h2>
        <p className="text-[var(--text-dim)]">Configure your device and dashboard preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <div className="cyberpunk-panel p-4">
          <div className="flex items-center mb-4">
            <Bell className="mr-2 text-[var(--primary)]" />
            <h3 className="text-lg font-bold text-[var(--primary)]">Notification Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">System Alerts</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.alerts}
                  onChange={() => setNotifications({...notifications, alerts: !notifications.alerts})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Firmware Updates</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.updates}
                  onChange={() => setNotifications({...notifications, updates: !notifications.updates})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Status Changes</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.status}
                  onChange={() => setNotifications({...notifications, status: !notifications.status})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Analytics Reports</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.analytics}
                  onChange={() => setNotifications({...notifications, analytics: !notifications.analytics})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* WiFi Settings */}
        <div className="cyberpunk-panel p-4">
          <div className="flex items-center mb-4">
            <Wifi className="mr-2 text-[var(--primary)]" />
            <h3 className="text-lg font-bold text-[var(--primary)]">WiFi Configuration</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Network SSID</label>
              <input 
                type="text" 
                className="cyberpunk-input w-full p-2 rounded"
                value={wifiSettings.ssid}
                onChange={(e) => setWifiSettings({...wifiSettings, ssid: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Security Type</label>
              <select 
                className="cyberpunk-input w-full p-2 rounded"
                value={wifiSettings.security}
                onChange={(e) => setWifiSettings({...wifiSettings, security: e.target.value})}
              >
                <option>Open</option>
                <option>WEP</option>
                <option>WPA</option>
                <option>WPA2</option>
                <option>WPA3</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Channel</label>
              <select 
                className="cyberpunk-input w-full p-2 rounded"
                value={wifiSettings.channel}
                onChange={(e) => setWifiSettings({...wifiSettings, channel: e.target.value})}
              >
                <option>Auto</option>
                <option>1</option>
                <option>6</option>
                <option>11</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Auto-Connect</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={wifiSettings.autoConnect}
                  onChange={() => setWifiSettings({...wifiSettings, autoConnect: !wifiSettings.autoConnect})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Display Settings */}
        <div className="cyberpunk-panel p-4">
          <div className="flex items-center mb-4">
            <Monitor className="mr-2 text-[var(--primary)]" />
            <h3 className="text-lg font-bold text-[var(--primary)]">Display Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Theme</label>
              <select 
                className="cyberpunk-input w-full p-2 rounded"
                value={displaySettings.theme}
                onChange={(e) => setDisplaySettings({...displaySettings, theme: e.target.value})}
              >
                <option value="dark">Cyberpunk Dark</option>
                <option value="light">Cyberpunk Light</option>
                <option value="neon">Neon Overdrive</option>
                <option value="minimal">Minimal Tech</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Data Refresh Rate (seconds)</label>
              <input 
                type="number" 
                className="cyberpunk-input w-full p-2 rounded"
                value={displaySettings.refreshRate}
                onChange={(e) => setDisplaySettings({...displaySettings, refreshRate: e.target.value})}
                min="1"
                max="60"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Enable Animations</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={displaySettings.animations}
                  onChange={() => setDisplaySettings({...displaySettings, animations: !displaySettings.animations})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Data Format</label>
              <select 
                className="cyberpunk-input w-full p-2 rounded"
                value={displaySettings.dataFormat}
                onChange={(e) => setDisplaySettings({...displaySettings, dataFormat: e.target.value})}
              >
                <option value="metric">Metric (°C, km)</option>
                <option value="imperial">Imperial (°F, mi)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Security Settings */}
        <div className="cyberpunk-panel p-4">
          <div className="flex items-center mb-4">
            <Shield className="mr-2 text-[var(--primary)]" />
            <h3 className="text-lg font-bold text-[var(--primary)]">Security Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Data Encryption</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={securitySettings.encryption}
                  onChange={() => setSecuritySettings({...securitySettings, encryption: !securitySettings.encryption})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Firewall Protection</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={securitySettings.firewall}
                  onChange={() => setSecuritySettings({...securitySettings, firewall: !securitySettings.firewall})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Access Control</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={securitySettings.accessControl}
                  onChange={() => setSecuritySettings({...securitySettings, accessControl: !securitySettings.accessControl})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-[var(--text)]">Secure Bootloader</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={securitySettings.secureBootloader}
                  onChange={() => setSecuritySettings({...securitySettings, secureBootloader: !securitySettings.secureBootloader})}
                />
                <div className="w-11 h-6 bg-[var(--surface-light)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[var(--background)] after:border-[var(--primary-dark)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Management */}
      <div className="cyberpunk-panel p-4 mt-6">
        <div className="flex items-center mb-4">
          <Database className="mr-2 text-[var(--primary)]" />
          <h3 className="text-lg font-bold text-[var(--primary)]">Data Management</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-[var(--text-dim)] mb-2">Storage Usage</h4>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">System Data</span>
                <span className="text-sm">12.4 MB</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm">User Data</span>
                <span className="text-sm">45.8 MB</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--secondary)] h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Logs</span>
                <span className="text-sm">8.2 MB</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--accent)] h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--text-dim)] mb-1">Data Retention Period</label>
              <select className="cyberpunk-input w-full p-2 rounded">
                <option>7 days</option>
                <option>30 days</option>
                <option>90 days</option>
                <option>1 year</option>
                <option>Forever</option>
              </select>
            </div>
            
            <div className="flex space-x-2">
              <button className="cyberpunk-button flex items-center">
                <RefreshCw size={16} className="mr-2" />
                Reset Data
              </button>
              
              <button className="cyberpunk-button flex items-center">
                <Save size={16} className="mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button className="cyberpunk-button flex items-center bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary-dark)]">
          <Save size={16} className="mr-2" />
          Save All Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;