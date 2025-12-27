import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function PieChartBox({ amount, interest, emi, tenure, rate }) {
  const data = [
    { name: "Principal", value: amount },
    { name: "Total Interest", value: interest },
    { name: "Monthly EMI", value: emi * 12 },
    { name: "Tenure (Years)", value: tenure * 1000 },
    { name: "Interest Rate", value: rate * 500 },
  ];

  const COLORS = [
    "#16a34a",
    "#facc15",
    "#2563eb",
    "#9333ea",
    "#ef4444",
  ];

  return (
    <PieChart width={360} height={320}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={110}
        dataKey="value"
        paddingAngle={3}
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" />
    </PieChart>
  );
}
