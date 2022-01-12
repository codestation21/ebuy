import { Box, Grid, Stack, Typography, ButtonBase, SvgIcon, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
//Custom Icon
import { CartIcon, LoevSolidIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Common/Products.styles";

//Data
import ProductsData from "Data/Products.data";

const Products = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Grid container spacing={4}>
                    {ProductsData &&
                        ProductsData.map((product, i) => (
                            <Grid item md={2.4} mds={4} sms={6} xs={12} key={i}>
                                <Link href="/products/id">
                                    <a className={classes.Link}>
                                        <Box
                                            component="img"
                                            src={product.image[0].url}
                                            className={classes.Images}
                                            alt="Product"
                                        />
                                        <Box sx={{ p: "10px 15px" }}>
                                            <Typography variant="h5" component="h5" className={classes.Titlte}>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body1" component="p" className={classes.Description}>
                                                {product.description}
                                            </Typography>
                                            <Stack direction="row" sx={{ alignItems: "center" }}>
                                                <Box>
                                                    <Rating
                                                        name="half-rating-read"
                                                        defaultValue={5}
                                                        precision={4}
                                                        readOnly
                                                        className={classes.Star}
                                                        emptyIcon={<StarIcon fontSize="inherit" />}
                                                    />
                                                </Box>
                                                <Box className={classes.Buttons}>
                                                    <ButtonBase>
                                                        <SvgIcon viewBox="0 0 22 23">
                                                            {CartIcon}
                                                        </SvgIcon>
                                                    </ButtonBase>
                                                    <ButtonBase>
                                                        <SvgIcon viewBox="0 0 27 24">
                                                            {LoevSolidIcon}
                                                        </SvgIcon>
                                                    </ButtonBase>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box className={classes.PriceBox}>
                                            <Typography variant="h6" component="h6">
                                                ${product.price}
                                            </Typography>
                                        </Box>
                                    </a>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
};
export default Products;