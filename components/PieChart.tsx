"use client"

import { useEffect, useRef } from "react"
import { Chart, type ChartConfiguration } from "chart.js/auto"

export function PieChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        const config: ChartConfiguration = {
          type: "pie",
          data: {
            labels: ["React", "TypeScript", "JavaScript", "Tailwind", "SASS", "CSS", "HTML"],
            datasets: [
              {
                data: [30, 25, 20, 10, 5, 5, 5],
                backgroundColor: [
                  "rgba(54, 162, 235, 0.8)",
                  "rgba(255, 99, 132, 0.8)",
                  "rgba(255, 206, 86, 0.8)",
                  "rgba(75, 192, 192, 0.8)",
                  "rgba(153, 102, 255, 0.8)",
                  "rgba(255, 159, 64, 0.8)",
                  "rgba(199, 199, 199, 0.8)",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Skill Distribution",
              },
            },
          },
        }
        new Chart(ctx, config)
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

