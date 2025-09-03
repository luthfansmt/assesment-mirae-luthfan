import { BarChart, Bar, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartCardProps {
  title: string;
  data: any[];
  type?: "bar" | "line";
}

export function ChartCard({ title, data, type = "bar" }: ChartCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        {type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#f97316" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
