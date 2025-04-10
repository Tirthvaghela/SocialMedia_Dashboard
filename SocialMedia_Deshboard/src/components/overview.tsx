"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    twitter: 18000,
    instagram: 5000,
  },
  {
    name: "Feb",
    twitter: 18500,
    instagram: 5200,
  },
  {
    name: "Mar",
    twitter: 19200,
    instagram: 5400,
  },
  {
    name: "Apr",
    twitter: 19800,
    instagram: 5600,
  },
  {
    name: "May",
    twitter: 20200,
    instagram: 5800,
  },
  {
    name: "Jun",
    twitter: 21000,
    instagram: 6000,
  },
  {
    name: "Jul",
    twitter: 21500,
    instagram: 6099,
  },
  {
    name: "Aug",
    twitter: 22000,
    instagram: 6099,
  },
  {
    name: "Sep",
    twitter: 22500,
    instagram: 6099,
  },
  {
    name: "Oct",
    twitter: 23000,
    instagram: 6099,
  },
  {
    name: "Nov",
    twitter: 23500,
    instagram: 6099,
  },
  {
    name: "Dec",
    twitter: 24531,
    instagram: 6099,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

