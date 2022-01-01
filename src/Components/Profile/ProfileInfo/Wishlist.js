import { Box, Typography, ButtonBase, SvgIcon, Stack } from "@mui/material";

//Custom Icon
import { DeleteIcon, CartIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Profile/Order&Wishlist.styles";

//CartData
import CartData from "Data/Cart.data";

const Wishlist = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.TabTitle}>
                <Typography variant="h6" component="h6">
                    Wishlist
                </Typography>
                <Box className={classes.ButtonContainer}>
                    <ButtonBase className={classes.Button}>
                        <SvgIcon viewBox="0 0 24 24">
                            {DeleteIcon}
                        </SvgIcon>
                        Clear Order
                    </ButtonBase>
                </Box>
            </Box>
            <Box sx={{ width: { sm: "unset", xs: "35em" } }}>
                {CartData &&
                    CartData.map((item, i) => (
                        <Stack direction="row" key={i} className={classes.CardContainer} sx={{ alignItems: "center" }}>
                            <Box sx={{ flex: "0 0 6%" }}>
                                <ButtonBase className={classes.RemoveItem}>
                                    <SvgIcon viewBox="0 0 24 24">
                                        {DeleteIcon}
                                    </SvgIcon>
                                </ButtonBase>
                            </Box>
                            <Box sx={{ flex: "0 0 10%" }}>
                                <Box component="img" className={classes.Images} src={item.product.images[0].url} alt="Product Image" />
                            </Box>
                            <Box sx={{ flex: "0 0 46%" }}>
                                <Box className={classes.ProductInfo}>
                                    <Typography variant="h6" component="h6">
                                        {item.product.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        By: The Cotton House
                                    </Typography>
                                    <Typography variant="h6" component="h6">
                                        $90
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: "0 0 18%" }}>
                                <Typography variant="body1" component="p" className={classes.StatusText}>
                                    Stock Status
                                </Typography>
                                <Typography variant="body1" component="h6" className={classes.StatusInfo}>
                                    InStock
                                </Typography>
                            </Box>
                            <Box sx={{ flex: "0 0 20%" }}>
                                <ButtonBase className={classes.AddToCartButton}>
                                    <SvgIcon viewBox="0 0 22 23" sx={{ display: { md: "unset", xs: "none" } }}>
                                        {CartIcon}
                                    </SvgIcon>
                                    Add to cart
                                </ButtonBase>
                            </Box>
                        </Stack>
                    ))
                }
                <Stack direction="row" className={classes.BottomTotal}>
                    <Box className={classes.TotalText}>
                        <Typography variant="h6" component="h6">
                            Total
                        </Typography>
                    </Box>
                    <Box sx={{ flex: "0 0 68%" }}>
                        <Typography variant="body1" component="p" className={classes.TotalDescription}>
                            Paid using credit card ending......
                        </Typography>
                    </Box>
                    <Box className={classes.TotalPrice}>
                        <Typography variant="h6" component="h6" sx={{ ml: "15px" }}>
                            $90
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};
export default Wishlist;