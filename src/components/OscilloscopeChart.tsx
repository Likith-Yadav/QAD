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

interface OscilloscopeChartProps {
  data: SensorData[];
}

const OscilloscopeChart: React.FC<OscilloscopeChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index.toString()),
    datasets: [
      {
        label: 'Signal',
        data: data.map(item => item.value),
        borderColor: '#0ff',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0 // general animation time
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        min: 0,
        max: 5,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 0.5
        },
        ticks: {
          color: 'rgba(224, 224, 255, 0.7)',
          font: {
            family: 'monospace'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default OscilloscopeChart;