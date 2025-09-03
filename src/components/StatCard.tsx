import { Card, SvgIcon, Typography } from "@mui/material";

interface StatCardProps {
    title: string;
    value: string | number;
  }
  
export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card
        sx={{
					height: '140px',
					width: '-webkit-fill-available',
					borderRadius: '12px',
					padding: '20px',
          boxShadow: 'unset'
        }}
    >
      <Typography>
          {title}
      </Typography>
      <Typography
      >
        {value}
      </Typography>
    </Card>
  );
}
  