import { Box } from "@mui/material";

//SectionHeader
import SectionHeader from "Utilis/SectionHeader";
//Products Ccomponents
import Products from "Components/Common/Products";

const FeaturesProduct = () => {
    return (
        <Box>
            <SectionHeader
                title="Featured"
                abbreviation="Products"
                description="Amazing products added recently in our catalog"
            />
            <Products />
        </Box>
    );
};
export default FeaturesProduct;