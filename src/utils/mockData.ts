import { SensorData } from '../types';

export const generateRandomData = (count: number, min: number, max: number): SensorData[] => {
  const data: SensorData[] = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    data.push({
      timestamp: now - (count - i) * 1000,
      value: min + Math.random() * (max - min)
    });
  }
  
  return data;
};

export const generateSineWaveData = (count: number, amplitude: number = 1, frequency: number = 0.1, phase: number = 0): SensorData[] => {
  const data: SensorData[] = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    const x = i * frequency;
    data.push({
      timestamp: now - (count - i) * 1000,
      value: amplitude * Math.sin(x + phase) + amplitude
    });
  }
  
  return data;
};

export const generateNoiseData = (count: number, baseValue: number = 2.5, noiseAmplitude: number = 0.5): SensorData[] => {
  const data: SensorData[] = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    data.push({
      timestamp: now - (count - i) * 1000,
      value: baseValue + (Math.random() * 2 - 1) * noiseAmplitude
    });
  }
  
  return data;
};