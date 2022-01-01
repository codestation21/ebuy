import { Grid } from "@mui/material";
//Components
import ImageCarousel from "./ProductImages/ImageCarousel";
import ImageMagnify from "./ProductImages/ImageMagnify";

//Data
import singleData from "Data/product.data";

const ProductImages = ({ setCurrentImage, currentImage }) => {
    return (
        <Grid container spacing={5}>
            <Grid item md={3} sms={3} xs={12}>
                <ImageCarousel
                    images={singleData.images}
                    setCurrentImage={setCurrentImage}
                />
            </Grid>
            <Grid item md={9} sms={9} xs={12}>
                <ImageMagnify
                    images={singleData.images}
                    currentImage={currentImage}
                />
            </Grid>
        </Grid>
    );
};
export default ProductImages;