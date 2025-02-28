import React from 'react';
import { BarChart2, TrendingUp, Clock, Zap } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <BarChart2 className="mr-2 text-[var(--primary)]" />
          Analytics Dashboard
        </h2>
        <p className="text-[var(--text-dim)]">Performance metrics and system analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Performance Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--text-dim)]">CPU Usage</span>
                <span className="text-sm font-bold">42%</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--text-dim)]">Memory Usage</span>
                <span className="text-sm font-bold">68%</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--secondary)] h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--text-dim)]">Network Bandwidth</span>
                <span className="text-sm font-bold">23%</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--accent)] h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--text-dim)]">Storage</span>
                <span className="text-sm font-bold">51%</span>
              </div>
              <div className="w-full bg-[var(--surface-light)] rounded-full h-2">
                <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: '51%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">System Health</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[var(--surface-light)] p-3 rounded">
              <div className="flex items-center mb-2">
                <TrendingUp className="mr-2 text-[var(--primary)]" size={18} />
                <span className="text-sm">Uptime</span>
              </div>
              <div className="text-xl font-bold">24:18:33</div>
              <div className="text-xs text-[var(--text-dim)] mt-1">Since last reboot</div>
            </div>
            
            <div className="bg-[var(--surface-light)] p-3 rounded">
              <div className="flex items-center mb-2">
                <Clock className="mr-2 text-[var(--primary)]" size={18} />
                <span className="text-sm">Response Time</span>
              </div>
              <div className="text-xl font-bold">42ms</div>
              <div className="text-xs text-[var(--text-dim)] mt-1">Average</div>
            </div>
            
            <div className="bg-[var(--surface-light)] p-3 rounded">
              <div className="flex items-center mb-2">
                <Zap className="mr-2 text-[var(--primary)]" size={18} />
                <span className="text-sm">Power</span>
              </div>
              <div className="text-xl font-bold">1.2W</div>
              <div className="text-xs text-[var(--text-dim)] mt-1">Current draw</div>
            </div>
            
            <div className="bg-[var(--surface-light)] p-3 rounded">
              <div className="flex items-center mb-2">
                <BarChart2 className="mr-2 text-[var(--primary)]" size={18} />
                <span className="text-sm">Data Rate</span>
              </div>
              <div className="text-xl font-bold">3.4KB/s</div>
              <div className="text-xs text-[var(--text-dim)] mt-1">Average</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cyberpunk-panel p-4 mb-6">
        <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Event Log</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--primary-dark)]">
                <th className="text-left py-2 px-4 text-[var(--text-dim)]">Timestamp</th>
                <th className="text-left py-2 px-4 text-[var(--text-dim)]">Event</th>
                <th className="text-left py-2 px-4 text-[var(--text-dim)]">Status</th>
                <th className="text-left py-2 px-4 text-[var(--text-dim)]">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--surface-light)]">
                <td className="py-2 px-4">2025-06-15 14:32:12</td>
                <td className="py-2 px-4">System Boot</td>
                <td className="py-2 px-4"><span className="text-[var(--success)]">Success</span></td>
                <td className="py-2 px-4">Clean boot sequence</td>
              </tr>
              <tr className="border-b border-[var(--surface-light)]">
                <td className="py-2 px-4">2025-06-15 14:35:27</td>
                <td className="py-2 px-4">WiFi Connected</td>
                <td className="py-2 px-4"><span className="text-[var(--success)]">Success</span></td>
                <td className="py-2 px-4">SSID: CyberNet_5G</td>
              </tr>
              <tr className="border-b border-[var(--surface-light)]">
                <td className="py-2 px-4">2025-06-15 15:12:45</td>
                <td className="py-2 px-4">Temperature Alert</td>
                <td className="py-2 px-4"><span className="text-[var(--danger)]">Warning</span></td>
                <td className="py-2 px-4">Temperature exceeded 40°C</td>
              </tr>
              <tr className="border-b border-[var(--surface-light)]">
                <td className="py-2 px-4">2025-06-15 16:23:01</td>
                <td className="py-2 px-4">Firmware Update</td>
                <td className="py-2 px-4"><span className="text-[var(--success)]">Success</span></td>
                <td className="py-2 px-4">Updated to v1.2.3</td>
              </tr>
              <tr className="border-b border-[var(--surface-light)]">
                <td className="py-2 px-4">2025-06-15 17:45:33</td>
                <td className="py-2 px-4">Battery Low</td>
                <td className="py-2 px-4"><span className="text-[var(--danger)]">Alert</span></td>
                <td className="py-2 px-4">Battery level below 20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Network Traffic</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Inbound</span>
              <span className="text-sm">1.2 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Outbound</span>
              <span className="text-sm">0.8 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Packets</span>
              <span className="text-sm">1,245</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Errors</span>
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
        
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Power Consumption</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Current</span>
              <span className="text-sm">1.2 W</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Average</span>
              <span className="text-sm">1.5 W</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Peak</span>
              <span className="text-sm">2.3 W</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Estimated Battery Life</span>
              <span className="text-sm">18h 24m</span>
            </div>
          </div>
        </div>
        
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Sensor Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Temperature</span>
              <span className="text-sm">32.5°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Humidity</span>
              <span className="text-sm">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Pressure</span>
              <span className="text-sm">1013 hPa</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[var(--text-dim)]">Light</span>
              <span className="text-sm">320 lux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;