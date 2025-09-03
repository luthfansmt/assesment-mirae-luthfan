import { Box, Card, Grid, Typography } from "@mui/material";
import { ChartCard } from "../components/ChartCard";
import data from "../data/data.json";

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
                        <Typography>{data?.summary.clients}</Typography>
                    </Box>
                    <Box>
                        <Typography>Revenue</Typography>
                        <Typography>{data?.summary.revenue}</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography>Clients</Typography>
                        <Typography>{data?.summary.clients}</Typography>
                    </Box>
                    <Box>
                        <Typography>Revenue</Typography>
                        <Typography>{data?.summary.revenue}</Typography>
                    </Box>
                    <Box>
                        <Typography>Growth</Typography>
                        <Typography>{data?.summary.growth}</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:3}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography>Branches</Typography>
                        <Typography>{data?.summary.branches}</Typography>
                    </Box>
                    <Box>
                        <Typography>Staff</Typography>
                        <Typography>{data.summary.staff}</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="No. of Clients" data={data?.clients} type="bar" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Loan" data={data.loans} type="bar" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Client Asset AUM" data={data.clientAssetsAum} type="line" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Trading Value" data={data.tradingValue} type="bar" />
                </Card>
            </Grid>
        </Grid>
    </>
  );
}