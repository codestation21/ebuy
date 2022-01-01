import { Container, Box, Grid } from "@mui/material";

//Layout
import Layout from "Layout/Layout";
//BreadCrumbs
import Breadcrumb from "Utilis/Breadcrumb";
//Components
import CartItem from "Components/Cart/CartItem";
import CartTable from "Components/Cart/CartTable";
import CartCuppon from "Components/Cart/CartCuppon";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Cart = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    title="Cart"
                />
                <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" }, mt: "2em" }} maxWidth={false} disableGutters>
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12}>
                            <CartItem />
                            <CartCuppon />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <CartTable />
                        </Grid>
                    </Grid>
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Cart;