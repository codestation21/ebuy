import { Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";
//Components
import ShippingInfo from "Components/Shipping/ShippingInfo";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Shipping = () => {
    return (
        <Layout>
            <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" }, mt: "100px" }} maxWidth={false} disableGutters>
                <ShippingInfo />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Shipping;