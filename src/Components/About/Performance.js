import { Box, Grid, Stack, Typography } from "@mui/material";

//styles
import useStyles from "Styles/About/Performance.styles";

//data
import PerformanceData from "Data/About/Performance.data";

const Performance = () => {
    const classes = useStyles();
    return (
        <Box sx={{ mt: "5em", mb: "3em" }}>
            <Grid container spacing={5}>
                <Grid item md={6.5} xs={12}>
                    <Stack direction="row">
                        <Box className={classes.smallImage}>
                            <Box component="img" src={PerformanceData.imageOne} alt="Image" />
                        </Box>
                        <Box className={classes.largeImage}>
                            <Box component="img" src={PerformanceData.imageTwo} alt="Image" />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item md={5.5} xs={12}>
                    <Box sx={{ py: "1em" }}>
                        <Typography variant="h6" component="h6" className={classes.HeaderTitle}>
                            {PerformanceData.title}
                        </Typography>
                        <Typography variant="h4" component="h4" className={classes.Title}>
                            {PerformanceData.name}
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.Description}>
                            {PerformanceData.description} <br /><br />
                            {PerformanceData.subDescription}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ my: "15px" }}>
                {PerformanceData?.performances?.length > 0 &&
                    PerformanceData?.performances?.map((performance, i) => (
                        <Grid item md={4} xs={12} key={i}>
                            <Typography variant="h4" component="h4" className={classes.FaqTitle}>
                                {performance.name}
                            </Typography>
                            <Typography variant="body1" component="p" className={classes.FaqDescription}>
                                {performance.description}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Performance;