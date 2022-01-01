import { Container, Grid } from "@mui/material";

//Styles
import useStyles from "Styles/Footer/Footer.styles";

// Components-- 4 Footer in one row
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import FooterFour from "Components/Footer/FooterFour";

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} disableGutters className={classes.FooterContainer} sx={{ mt: { md: "0", mds: "3.5em !important" }, px: { md: "5.5em !important", lxs: "1.5em", xs: "0.5em" } }} component="footer">
            <Grid container spacing={3}>
                <Grid item md={2.5} sms={6} xs={12} sx={{ pl: { xs: "0px !important" } }}>
                    <FooterOne />
                </Grid>
                <Grid item md={2.5} sms={6} xs={12} sx={{ pl: { xs: "0px !important" } }}>
                    <FooterTwo />
                </Grid>
                <Grid item md={3.5} sms={6} xs={12} sx={{ pl: { xs: "0px !important" } }}>
                    <FooterThree />
                </Grid>
                <Grid item md={3.5} sms={6} xs={12} sx={{ pl: { xs: "0px !important" } }}>
                    <FooterFour />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Footer;