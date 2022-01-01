import { Box } from "@mui/material";

//Components
import SectionHeader from "Utilis/SectionHeader";
import Products from "Components/Common/Products";

const RelatedProducts = () => {
    return (
        <Box>
            <SectionHeader
                title="Related"
                abbreviation="Products"
                description="Amazing products added recently in our catalog"
            />
            <Products />
        </Box>
    );
};
export default RelatedProducts;