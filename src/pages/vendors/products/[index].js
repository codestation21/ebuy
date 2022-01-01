import { Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Components
import VendorInfo from "Components/VendorProducts/VendorInfo";
import Search from "Components/VendorProducts/Search";
import VendorProducts from "Components/VendorProducts/VendorProducts";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Vendor = () => {
    return (
        <Layout>
            <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" }, mt: "80px" }} maxWidth={false} disableGutters>
                <VendorInfo />
                <Search />
                <VendorProducts />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Vendor;