import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { SensorData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface BatteryChartProps {
  data: SensorData[];
}

const BatteryChart: React.FC<BatteryChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `${24 - data.length + index}h`),
    datasets: [
      {
        label: 'Battery Level',
        data: data.map(item => item.value),
        borderColor: '#f0f',
        backgroundColor: 'rgba(240, 0, 255, 0.1)',
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: '#f0f',
        tension: 0.2,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 0.5
        },
        ticks: {
          color: 'rgba(224, 224, 255, 0.7)',
          font: {
            family: 'monospace'
          },
          maxRotation: 0
        }
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 0.5
        },
        ticks: {
          color: 'rgba(224, 224, 255, 0.7)',
          font: {
            family: 'monospace'
          },
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(26, 26, 47, 0.9)',
        titleFont: {
          family: 'monospace'
        },
        bodyFont: {
          family: 'monospace'
        },
        callbacks: {
          label: function(context: any) {
            return `Battery: ${context.raw.toFixed(1)}%`;
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default BatteryChart;