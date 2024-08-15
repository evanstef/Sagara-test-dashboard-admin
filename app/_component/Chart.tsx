"use client"

import { useEffect, useRef } from 'react';
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Mendaftarkan skala dan elemen yang dibutuhkan
Chart.register(LinearScale, CategoryScale, BarController, BarElement, Tooltip, Legend);

export default function BarChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    // Hancurkan chart jika sudah ada instance yang dibuat
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Membuat chart baru
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Back End', 'Front End', 'Quality Assurance', 'UI/UX'],
        datasets: [
          {
            label: 'Student',
            data: [289, 200, 300, 100],
            backgroundColor: '#a31326',
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#000',
            cornerRadius: 4,
            titleFont: {
              weight: 'bold',
            },
            padding: 8,
            callbacks: {
              label: function (context) {
                return `${context.raw}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 400,
            ticks: {
              stepSize: 100,
            },
            grid: {
              borderDash: [2, 4] as number[],
              color: '#e5e7eb',
            }as Partial<any>,
          },
        },
      },
    });

    // Bersihkan chart ketika komponen di-unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-[250px] xl:h-[350px] border border-border bg-white px-[19px] py-5 mx-auto mt-10 rounded">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Student</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

