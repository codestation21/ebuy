import { useState } from "react";
import { Box, Grid } from "@mui/material";

//Components tree
import ProductImages from "./ProductInfo/ProductImages";
import ProductContents from "./ProductInfo/ProductContents";

const ProductInfo = () => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <Box sx={{ px: 3 }}>
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <ProductImages
                        setCurrentImage={setCurrentImage}
                        currentImage={currentImage}
                    />
                </Grid>
                <Grid item md={5} xs={12}>
                    <ProductContents
                        setCurrentImage={setCurrentImage}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default ProductInfo;