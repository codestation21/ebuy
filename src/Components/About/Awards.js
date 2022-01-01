import { Box, Grid, Stack, NoSsr, Typography } from "@mui/material";

//CounterUp
import CounterUp from "Utilis/CounterUp";

//Styles
import useStyles from "Styles/About/Awards.styles";

//Data
import AwardsData from "Data/About/Awards.data";

const Awards = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <NoSsr>
                <Grid container spacing={2} className={classes.Content}>
                    {AwardsData?.length > 0 &&
                        AwardsData.map((award, i) => (
                            <Grid item md={2.4} xs={6} key={i} sx={{ textAlign: "center" }}>
                                <Stack direction="row" sx={{ justifyContent: "center" }}>
                                    <Typography variant="h6" component="h6" className={classes.Counts}>
                                        <CounterUp value={award.count} />
                                    </Typography>
                                    <Typography variant="h6" component="span" className={classes.Counts}>
                                        +
                                    </Typography>
                                </Stack>
                                <Typography variant="body1" component="p" className={classes.Description}>
                                    {award.title}
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </NoSsr>
        </Box>
    );
};
export default Awards;