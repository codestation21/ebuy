import { Box, Stack, Typography, Grid, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";

//Styles
import useStyles from "Styles/Home/TopSingle.styles";

const TopSingle = ({ title, products }) => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Typography variant="h6" component="h6" className={classes.Title}>
                    {title}
                </Typography>
            </Box>
            <Box>
                {products &&
                    products.slice(0, 3).map((product, i) => (
                        <Link href="/products/id" key={i}>
                            <a className={classes.Link}>
                                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                                    <Grid item xs={3.5}>
                                        <Box component="img" src={product.image[0].url} className={classes.Images} alt="Product" />
                                    </Grid>
                                    <Grid item xs={8.5}>
                                        <Typography variant="h6" component="h6" className={classes.ProductTitle}>
                                            {product.name}
                                        </Typography>
                                        <Stack direction="row" sx={{ mb: "8px" }}>
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
                                            <Box className={classes.RatingPoint}>
                                                ({parseFloat(product.ratting).toFixed(1)})
                                            </Box>
                                        </Stack>
                                        <Stack direction="row">
                                            <Box sx={{ mr: "12px" }}>
                                                <Typography variant="h6" component="h6" sx={{ fontSize: "18px" }}>
                                                    ${product.price}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="h6" className={classes.OriginalPrice}>
                                                    ${product.originalPrice}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </a>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    );
};
export default TopSingle;