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
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.clients.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>No. of Accounts</Typography>
                    </Box>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.revenue.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Client Asset AUM</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.clients.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Loans</Typography>
                    </Box>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.growth}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Growth</Typography>
                    </Box>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.revenue.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Revenue</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:3}} pb={2}>
                <Card sx={{...styles.card, ...styles.space}}>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data?.summary.branches.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Branches</Typography>
                    </Box>
                    <Box>
                        <Typography textAlign={'center'} fontWeight={'bold'}>{data.summary.staff.toLocaleString()}</Typography>
                        <Typography textAlign={'center'} fontSize={12}>Staff</Typography>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="No. of Clients" data={data?.clients} type="bar" category="client" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Loan" data={data.loans} type="stacked" category="loan" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Client Asset AUM" data={data.clientAssetsAum} type="bar" category="aum" />
                </Card>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <Card sx={{...styles.card}}>
                    <ChartCard title="Trading Value" data={data.tradingValue} type="bar" category="trading" />
                </Card>
            </Grid>
        </Grid>
    </>
  );
}