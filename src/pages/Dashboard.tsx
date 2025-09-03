import { Box, Card, Grid, Typography } from "@mui/material";
import { ChartCard } from "../components/ChartCard";

const dummyData = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 130 },
    { name: "mei", value: 100 },
    { name: "jun", value: 120 },
    { name: "jul", value: 150 },
    { name: "aug", value: 130 },
  ];

const styles = {
    card: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: 'unset',
    },
    space: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
    }
  };


export default function Dashboard() {
  return (
    <>
        <Typography variant="h4">
            Overview
        </Typography>
        <Grid container spacing={2}>
            <Grid size={{xs:12, sm:3}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography>Clients</Typography>
                        <Typography>371,602</Typography>
                    </Box>
                    <Box>
                        <Typography>Revenue</Typography>
                        <Typography>371,602</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography>Clients</Typography>
                        <Typography>371,602</Typography>
                    </Box>
                    <Box>
                        <Typography>Revenue</Typography>
                        <Typography>371,602</Typography>
                    </Box>
                    <Box>
                        <Typography>Growth</Typography>
                        <Typography>5,8%</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:3}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography>Branches</Typography>
                        <Typography>50</Typography>
                    </Box>
                    <Box>
                        <Typography>Products</Typography>
                        <Typography>24</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="No. of Clients" data={dummyData} type="bar" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Loan" data={dummyData} type="bar" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Client Asset AUM" data={dummyData} type="line" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Trading Value" data={dummyData} type="bar" />
                </Card>
            </Grid>
        </Grid>
    </>
  );
}