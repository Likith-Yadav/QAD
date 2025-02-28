export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface SensorData {
  timestamp: number;
  value: number;
}

export interface BatteryStatus {
  level: number;
  charging: boolean;
  temperature: number;
  voltage: number;
  health: 'good' | 'fair' | 'poor';
}

export interface ComponentData {
  id: string;
  type: 'resistor' | 'capacitor' | 'led' | 'switch' | 'sensor';
  name: string;
  position: { x: number; y: number };
  connections: string[];
  properties: Record<string, any>;
}

export interface SystemStatus {
  online: boolean;
  lastSeen: Date | null;
  firmwareVersion: string;
  ipAddress: string;
  signalStrength: number;
}