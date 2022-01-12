import { Box, List, ListItem, ButtonBase, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";

//Custom Icon
import { CheckoutIcon } from "Utilis/Icons";

//Theme
import theme from "Theme";

//Styles
import useStyles from "Styles/Cart/CartTable.styles";

const CartTable = () => {
    const classes = useStyles();
    return (
        <Box className={classes.TableContainer}>
            <List className={classes.List}>
                <ListItem direction="row">
                    <Typography variant="body1" component="h6">
                        Subtotal
                    </Typography>
                    <Typography variant="body1" component="p">
                        $450
                    </Typography>
                </ListItem>
                <ListItem direction="row">
                    <Typography variant="body1" component="h6">
                        Shipping
                    </Typography>
                    <Typography sx={{ color: `${theme.palette.primary.gray_secondary} !important` }} variant="body1" component="p">
                        $50
                    </Typography>
                </ListItem>
                <ListItem direction="row">
                    <Typography variant="body1" component="h6">
                        Estimate for
                    </Typography>
                    <Typography sx={{ color: `${theme.palette.primary.gray_secondary} !important` }} variant="body1" component="p">
                        United Kingdom
                    </Typography>
                </ListItem>
                <ListItem direction="row">
                    <Typography variant="body1" component="h6">
                        Total
                    </Typography>
                    <Typography variant="body1" component="p">
                        $500
                    </Typography>
                </ListItem>
            </List >
            <ButtonBase className={classes.ProceedButton}>
                <Link href="/shipping/index">
                    <a>
                        Proceed to Checkout
                        <SvgIcon viewBox="0 0 24 24">
                            {CheckoutIcon}
                        </SvgIcon>
                    </a>
                </Link>
            </ButtonBase>
        </Box >
    );
};
export default CartTable;