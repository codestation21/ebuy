import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

//Styles
import useStyles from "Styles/Header/Header.styles";

//Components
import Logo from "Components/Header/Logo";
import Navigation from "Components/Header/Navigation";
import Icons from "Components/Header/Icons";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);
    return (
        <Container
            maxWidth={false}
            className={`mui-header ${scroll ? "sticky" : ""} ${classes.Header}`}
        >
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={2} sms={5.5} xs={4.5}>
                    <Logo />
                </Grid>
                <Grid item md={8} sms={1} xs={1}>
                    <Navigation />
                </Grid>
                <Grid item md={2} sms={5.5} xs={6.5}>
                    <Icons />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header;