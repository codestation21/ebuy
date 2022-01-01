import { Box, Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import ContactUs from "Components/Contact/ContactUs";
import Map from "Components/Contact/Map";
import Forms from "Components/Contact/Forms";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Contact = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    title="Contact us"
                />
                <Container sx={{ px: { lg: "4em", md: "2em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <ContactUs />
                    <Map />
                    <Forms />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Contact;