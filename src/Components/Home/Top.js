import { Box, Grid } from "@mui/material";

//Components
import TopSingle from "./Top/TopSingle";

//Data
import ProductsData from "Data/Products.data";

const Top = () => {
    return (
        <Box sx={{ pt: "4.5em" }}>
            <Grid container spacing={4}>
                <Grid item lg={3} sm={6} xs={12}>
                    <TopSingle
                        title="Top Selling"
                        products={ProductsData}
                    />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <TopSingle
                        title="Trending Products"
                        products={ProductsData}
                    />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <TopSingle
                        title="Recently Added"
                        products={ProductsData}
                    />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <TopSingle
                        title="Top Rated"
                        products={ProductsData}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Top;