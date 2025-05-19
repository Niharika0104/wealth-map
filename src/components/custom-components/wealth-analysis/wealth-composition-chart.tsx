"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import type { ConfidenceLevel } from "./mock-data"

type WealthCompositionItem = {
  name: string
  value: string
  color: string
  confidence: ConfidenceLevel
}

interface WealthCompositionChartProps {
  data: WealthCompositionItem[]
  compact?: boolean
}

export function WealthCompositionChart({ data, compact = false }: WealthCompositionChartProps) {
  // Convert string values to numbers for the chart
  const chartData = data.map((item) => ({
    ...item,
    value: Number.parseFloat(item.value.replace(/[^0-9.]/g, "")),
  }))

  // Custom legend renderer to fix the double circles issue
  const renderLegend = (props: any) => {
    const { payload } = props

    return (
      <ul className="flex flex-col gap-2 pl-4">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm" style={{ color: entry.color, fontWeight: 500 }}>
              {entry.value}: ${chartData[index].value}M
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={compact ? 35 : 50} // Smaller inner radius for thicker chart
          outerRadius={compact ? 70 : 90}
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
          label={false} // No labels inside the chart
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => [`$${value}M`, "Value"]}
          contentStyle={{
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "none",
          }}
        />
        <Legend
          content={renderLegend}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          wrapperStyle={{ paddingLeft: "20px" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
