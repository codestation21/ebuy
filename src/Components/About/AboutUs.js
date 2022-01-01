import { Box, Grid, Typography } from "@mui/material";

//SectionHEader
import SectionHeader from "Utilis/SectionHeader";

//Components
import AboutCarousel from "./AboutUs/AboutCarousel";

//Styles
import useStyles from "Styles/About/AboutUs.styles";

//Data
import AboutUsData from "Data/About/AboutUs.data";

const AboutUs = () => {
    const classes = useStyles();
    return (
        <Box>
            <SectionHeader
                title="About"
                abbreviation="Us"
                description="Know Us & And Fun"
            />
            <Grid container spacing={5}>
                <Grid item md={5} xs={12}>
                    <Box component="img" className={classes.LeftImage} src={AboutUsData.image} alt="About" />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Box sx={{ py: "1em" }}>
                        <Typography variant="h5" component="h5" className={classes.Title}>
                            {AboutUsData.name}
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.Description}>
                            {AboutUsData.description} <br /><br />
                            {AboutUsData.details}
                        </Typography>
                        <AboutCarousel images={AboutUsData.images} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default AboutUs;