import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Thermometer, 
  Wifi, 
  Clock, 
  Battery, 
  AlertTriangle,
  RefreshCw,
  ImageIcon
} from 'lucide-react';
import OscilloscopeChart from './OscilloscopeChart';
import BatteryChart from './BatteryChart';
import { SystemStatus, BatteryStatus, SensorData } from '../types';
import { generateRandomData } from '../utils/mockData';
import WhatsAppImage1 from '/images/WhatsApp Image 2025-02-28 at 09.20.47_e8228244.jpg';
import WhatsAppImage2 from '/images/WhatsApp Image 2025-02-28 at 09.20.46_3eac2ffa.jpg';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [oscilloscopeData, setOscilloscopeData] = useState<SensorData[]>([]);
  const [batteryHistory, setBatteryHistory] = useState<SensorData[]>([]);
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    online: true,
    lastSeen: new Date(),
    firmwareVersion: '1.2.3',
    ipAddress: '192.168.1.100',
    signalStrength: 85
  });
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus>({
    level: 78,
    charging: false,
    temperature: 32,
    voltage: 3.7,
    health: 'good'
  });

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
      setOscilloscopeData(generateRandomData(100, 0, 5));
      setBatteryHistory(generateRandomData(24, 50, 100));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time data updates
  useEffect(() => {
    if (loading) return;

    const interval = setInterval(() => {
      // Update oscilloscope data
      setOscilloscopeData(prev => {
        const newData = [...prev.slice(1), { 
          timestamp: Date.now(), 
          value: Math.sin(Date.now() / 1000) * 2 + Math.random() * 0.5 + 2.5
        }];
        return newData;
      });

      // Update battery data occasionally
      if (Math.random() > 0.7) {
        setBatteryHistory(prev => {
          const newLevel = prev[prev.length - 1].value + (Math.random() * 2 - 1);
          const clampedLevel = Math.max(Math.min(newLevel, 100), 0);
          return [...prev.slice(1), { timestamp: Date.now(), value: clampedLevel }];
        });
        
        setBatteryStatus(prev => ({
          ...prev,
          level: batteryHistory[batteryHistory.length - 1]?.value || prev.level,
          temperature: prev.temperature + (Math.random() * 0.4 - 0.2),
          voltage: prev.voltage + (Math.random() * 0.02 - 0.01)
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [loading, batteryHistory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="loading-indicator mx-auto mb-4"></div>
          <p className="text-[var(--primary)]">Initializing dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Zap className="mr-2 text-[var(--primary)]" />
          System Overview
        </h2>
        <p className="text-[var(--text-dim)]">Real-time monitoring and analytics</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="cyberpunk-panel p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[var(--text-dim)]">Status</h3>
            <div className={`h-2 w-2 rounded-full ${systemStatus.online ? 'bg-[var(--success)]' : 'bg-[var(--danger)]'}`}></div>
          </div>
          <div className="flex items-center">
            <Wifi className="mr-2 text-[var(--primary)]" size={20} />
            <span className="text-lg font-bold">{systemStatus.online ? 'ONLINE' : 'OFFLINE'}</span>
          </div>
          <div className="mt-2 text-xs text-[var(--text-dim)]">
            Signal: {systemStatus.signalStrength}% | IP: {systemStatus.ipAddress}
          </div>
        </div>

        <div className="cyberpunk-panel p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[var(--text-dim)]">Battery</h3>
            {batteryStatus.charging && <Zap className="text-[var(--accent)]" size={16} />}
          </div>
          <div className="flex items-center">
            <Battery className="mr-2 text-[var(--primary)]" size={20} />
            <span className="text-lg font-bold">{batteryStatus.level.toFixed(1)}%</span>
          </div>
          <div className="mt-2 text-xs text-[var(--text-dim)]">
            {batteryStatus.voltage.toFixed(2)}V | {batteryStatus.temperature.toFixed(1)}°C
          </div>
        </div>

        <div className="cyberpunk-panel p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[var(--text-dim)]">Temperature</h3>
            {batteryStatus.temperature > 40 && <AlertTriangle className="text-[var(--danger)]" size={16} />}
          </div>
          <div className="flex items-center">
            <Thermometer className="mr-2 text-[var(--primary)]" size={20} />
            <span className="text-lg font-bold">{batteryStatus.temperature.toFixed(1)}°C</span>
          </div>
          <div className="mt-2 text-xs text-[var(--text-dim)]">
            Status: {
              batteryStatus.temperature > 45 ? 'Critical' : 
              batteryStatus.temperature > 40 ? 'Warning' : 'Normal'
            }
          </div>
        </div>

        <div className="cyberpunk-panel p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[var(--text-dim)]">Uptime</h3>
            <RefreshCw className="text-[var(--primary-dark)]" size={16} />
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-[var(--primary)]" size={20} />
            <span className="text-lg font-bold">24:18:33</span>
          </div>
          <div className="mt-2 text-xs text-[var(--text-dim)]">
            Firmware: v{systemStatus.firmwareVersion}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Signal Oscilloscope</h3>
          <div className="h-64">
            <OscilloscopeChart data={oscilloscopeData} />
          </div>
        </div>

        <div className="cyberpunk-panel p-4">
          <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">Battery History (24h)</h3>
          <div className="h-64">
            <BatteryChart data={batteryHistory} />
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="cyberpunk-panel p-4">
        <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">Device ID</td>
                  <td className="py-2 text-right">ESP32-CYBERPULSE-01</td>
                </tr>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">Firmware</td>
                  <td className="py-2 text-right">v{systemStatus.firmwareVersion}</td>
                </tr>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">IP Address</td>
                  <td className="py-2 text-right">{systemStatus.ipAddress}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">Last Update</td>
                  <td className="py-2 text-right">{systemStatus.lastSeen?.toLocaleTimeString()}</td>
                </tr>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">Signal Strength</td>
                  <td className="py-2 text-right">{systemStatus.signalStrength}%</td>
                </tr>
                <tr className="border-b border-[var(--surface-light)]">
                  <td className="py-2 text-[var(--text-dim)]">Battery Health</td>
                  <td className="py-2 text-right capitalize">{batteryStatus.health}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="cyberpunk-panel p-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[var(--primary)] flex items-center">
            <ImageIcon className="mr-2" />
            System Images
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Image */}
          <div className="relative group">
            <img 
              src={WhatsAppImage1}
              alt="System Image 1"
              className="w-full h-48 object-cover rounded-lg border-2 border-[var(--surface-light)]"
            />
          </div>

          {/* Second Image */}
          <div className="relative group">
            <img 
              src={WhatsAppImage2}
              alt="System Image 2"
              className="w-full h-48 object-cover rounded-lg border-2 border-[var(--surface-light)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;