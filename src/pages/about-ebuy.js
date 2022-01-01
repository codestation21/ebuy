import { Container, Box, NoSsr } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Breadcrumbs
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import AboutUs from "Components/About/AboutUs";
import Provides from "Components/About/Provides";
import Performance from "Components/About/Performance";
import Awards from "Components/About/Awards";
import Team from "Components/About/Team";

//Subscribe && Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const About = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    title="About us"
                />
                <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <AboutUs />
                    <Provides />
                    <Performance />
                    <Awards />
                    <Team />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default About;