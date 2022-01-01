import { Container, Box } from "@mui/material";

//Layout
import Layout from "Layout/Layout";
//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";
//Components
import ProductInfo from "Components/Product/ProductInfo";
import ProductDetails from "Components/Product/ProductDetails";
import RelatedProducts from "Components/Product/RelatedProducts";
//Subscribe and Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

//Data
import singleData from "Data/product.data";

const Product = () => {
    return (
        <Layout>
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    category={singleData.category.name}
                    subCategory={singleData.category.subCategory.name}
                    title={singleData.name}
                />
                <Container sx={{ px: { lg: "4.5em", sm: "2.5em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <ProductInfo />
                    <ProductDetails />
                </Container>
                <Container sx={{ px: { lg: "4em", sm: "2em", xs: "1em" } }} maxWidth={false} disableGutters>
                    <RelatedProducts />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Product;