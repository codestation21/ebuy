import { Box, Grid, Typography } from "@mui/material";

//SectionHEader
import SectionHeader from "Utilis/SectionHeader";

//Styles
import useStyles from "Styles/About/Provides.styles";

//Data
import ProvidesData from "Data/About/Provides.data";

const Provides = () => {
    const classes = useStyles();
    return (
        <Box>
            <SectionHeader
                title="whatwe"
                abbreviation="provides?"
                description="We are try to make easy way shoping"
            />
            <Grid container spacing={4} sx={{ px: { mds: "3em", sm: "0em !important" } }}>
                {ProvidesData?.length > 0 &&
                    ProvidesData.map((provide, i) => (
                        <Grid item sm={6} xs={12} key={i}>
                            <Box className={classes.Container}>
                                <Box component="img" width="80px" src={provide.icon} alt="Provides" />
                                <Typography variant="h6" component="h6" className={classes.Titlte}>
                                    {provide.title}
                                </Typography>
                                <Typography variant="body1" component="p" className={classes.Description}>
                                    {provide.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Provides;