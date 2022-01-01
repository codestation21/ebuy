import { useState } from "react";
import { Box, Typography, ButtonBase, SvgIcon, Stack } from "@mui/material";

//Custom Icon
import { DeleteIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Profile/Order&Wishlist.styles";

//CartData
import CartData from "Data/Cart.data";

const Order = () => {
    const [orderDetails, setOrderDetails] = useState(null);
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.TabTitle}>
                <Typography variant="h6" component="h6">
                    All Orders
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
                        <Box key={i} className={classes.CardContainer}>
                            <Stack direction="row" sx={{ alignItems: "center" }}>
                                <Box sx={{ flex: "0 0 6%" }}>
                                    <ButtonBase className={classes.RemoveItem}>
                                        <SvgIcon viewBox="0 0 24 24">
                                            {DeleteIcon}
                                        </SvgIcon>
                                    </ButtonBase>
                                </Box>
                                <Stack direction="row" onClick={() => setOrderDetails(i)} sx={{ alignItems: "center", flex: "0 0 92%", cursor: "pointer" }}>
                                    <Box sx={{ flex: "0 0 10%" }}>
                                        <Box component="img" src={item.product.images[0].url} alt="Product Image" className={classes.Images} />
                                    </Box>
                                    <Box sx={{ flex: "0 0 60%" }}>
                                        <Box className={classes.ProductInfo}>
                                            <Typography variant="h6" component="h6">
                                                {item.product.name}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                By: The Cotton House
                                            </Typography>
                                            <Box>
                                                <Typography variant="body1" component="span">
                                                    Size: M
                                                </Typography>
                                                <Typography variant="body1" component="span">
                                                    Qty: 2
                                                </Typography>
                                                <Typography variant="h5" component="span">
                                                    $90
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ flex: "0 0 18%" }}>
                                        <Typography variant="body1" component="p" className={classes.StatusText}>
                                            Status
                                        </Typography>
                                        <Typography variant="body1" component="h6" className={classes.StatusInfo}>
                                            Processing
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: "0 0 18%" }}>
                                        <Typography variant="body1" component="p" className={classes.StatusAndDateText}>
                                            Date
                                        </Typography>
                                        <Typography variant="body1" component="h6" className={classes.DateInfo}>
                                            25 June 2022
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                            {orderDetails === i &&
                                <Box>
                                    <Stack direction="row" className={classes.MoreInfoContainer}>
                                        <Box className={classes.MoreInfo}>
                                            <Typography variant="h6" component="h6">
                                                Package Processing Started
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                Your Package is ready to be prepated by the seller
                                            </Typography>
                                        </Box>
                                        <Box className={classes.MoreDateInfo}>
                                            <Typography variant="body1" component="p">
                                                Date
                                            </Typography>
                                            <Typography variant="body1" component="h6">
                                                25 June 2022
                                            </Typography>
                                        </Box>
                                    </Stack>
                                    <Box sx={{ textAlign: "center" }}>
                                        <ButtonBase onClick={() => setOrderDetails(null)} className={classes.ViewLessButton}>
                                            Viewless
                                        </ButtonBase>
                                    </Box>
                                </Box>
                            }
                        </Box>
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
export default Order;