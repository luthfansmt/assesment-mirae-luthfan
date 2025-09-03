import { BarChart, Bar, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ChartCardProps {
  title: string;
  data: any[];
  type?: "bar" | "line" | "stacked";
}

export function ChartCard({ title, data, type = "bar" }: ChartCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        {type === "bar" ? (
          <BarChart data={data}>
            <Legend
              layout="horizontal" 
              verticalAlign="top" 
              align="right"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" name="No of Accounts" stackId="a" fill="#f97316" />
            <Line type="monotone" name="Exchange (BM)" dataKey="uv" stroke="#7bb7d3" />
          </BarChart>
        ) : type === 'stacked' ? (
          <BarChart data={data}>
            <Legend
              layout="horizontal" 
              verticalAlign="top" 
              align="right"
              content={() => (
                <div style={{ textAlign: "right", marginBottom: 10 }}>
                  <span style={{ color: "#f97316", fontWeight: "bold" }}>Reguler (SMM)</span>
                </div>
              )}
             />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#f97316" />
            <Bar dataKey="uv" stackId="a" fill="#7bb7d3" />
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
