"use client";
import { useRef, useState, useEffect } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartTypeRegistry,
  registerables,
} from "chart.js";

// Register all the Chart.js components we need
Chart.register(...registerables);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(99, 102, 241, 1)",
      hoverBackgroundColor: "rgba(67, 56, 202, 1)",
      borderColor: "rgb(99, 102, 241)",
      data: [10, 10, 15, 20, 40, 30, 45, 20, 30, 55, 35, 60],
      fill: true,
    },
  ],
};

const chartConfig: ChartConfiguration = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
        },
        ticks: {
          padding: 8,
        },
      },
    },
  },
};

function Barchart() {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const [chart, setChart] = useState<Chart<keyof ChartTypeRegistry> | null>(
    null
  );

  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartContainer && chartContainer.current) {
      chartInstance = new Chart(chartContainer.current, chartConfig);
      setChart(chartInstance);
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-md shadow p-5">
      <div className="text-xl text-gray-600 mb-3 font-semibold">Monthly</div>
      <div className="">
        <canvas ref={chartContainer} />
      </div>
    </div>
  );
}

export default Barchart;
