import { Box, Container } from "@mui/material";

//Layout
import Layout from "Layout/Layout";

//Breadcrumbs
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import Search from "Components/Vendor/Search";
import Vendors from "Components/Vendor/Vendors";

//Subscribe and Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const VendorHome = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    title="Shop"
                />
                <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <Search />
                    <Vendors />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default VendorHome;