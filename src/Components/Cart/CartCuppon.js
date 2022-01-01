import { Box, Stack, ButtonBase, SvgIcon, Typography, NativeSelect, InputBase } from "@mui/material";
import Link from "next/link";

//Theme
import theme from "Theme";

//Styles
import useStyles from "Styles/Cart/CartCuppon.styles";

//Custom Icon
import { LongArrowLeftIcon, RefreshIcon, TagIcon } from "Utilis/Icons";

const CartCuppon = () => {
    const classes = useStyles();
    return (
        <Box sx={{ mt: "1.5em" }}>
            <Stack direction="row" sx={{ alignItems: "center", mb: 4, flexWrap: { sms: "unset", xs: "wrap" } }}>
                <Box sx={{ flex: { sms: "unset", xs: "0 0 100%" } }}>
                    <ButtonBase className={classes.Buttons}>
                        <Link href="/">
                            <a className={classes.Link}>
                                <SvgIcon viewBox="0 0 24 11">
                                    {LongArrowLeftIcon}
                                </SvgIcon>
                                Continue Shopping
                            </a>
                        </Link>
                    </ButtonBase>
                </Box>
                <Box className={classes.UpdateCartButton} sx={{ flex: { sms: "unset", xs: "0 0 100%" } }}>
                    <ButtonBase className={classes.Buttons} >
                        <Link href="/">
                            <a className={classes.Link}>
                                <SvgIcon viewBox="0 0 24 25">
                                    {RefreshIcon}
                                </SvgIcon>
                                Update Cart
                            </a>
                        </Link>
                    </ButtonBase>
                </Box>
            </Stack>
            <Stack direction="row" sx={{ flexWrap: { sms: "unset", xs: "wrap" } }}>
                <Box className={classes.CupponContainer}>
                    <Typography className={classes.CalculateTextBold} variant="h6" component="h6">
                        Calculate Shipping
                    </Typography>
                    <Typography className={classes.CalculateTextPlain} variant="body1" component="p">
                        Flat Rate: {" "}
                        <Typography sx={{ color: theme.palette.primary.main }} variant="body1" component="span">
                            5%
                        </Typography>
                    </Typography>
                    <NativeSelect className={classes.Select}>
                        <option value="1">United Kingdom</option>
                        <option value="2">Twenty</option>
                        <option value="3">Thirty</option>
                        <option value="4">Fifty</option>
                    </NativeSelect>
                    <Stack direction="row" sx={{ mt: 2 }}>
                        <Box sx={{ mr: "5px" }}>
                            <InputBase className={classes.InputBase} placeholder="State / Country" />
                        </Box>
                        <Box sx={{ ml: "5px" }}>
                            <InputBase className={classes.InputBase} placeholder="PostCode / Zip" />
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ mt: "2em", flex: { sms: "unset", xs: "0 0 100%" } }}>
                    <Typography className={classes.CalculateTextBold} variant="h6" component="h6">
                        Apply Cuppon
                    </Typography>
                    <Typography className={classes.CalculateTextPlain} variant="body1" component="p">
                        Using a Promo Code?
                    </Typography>
                    <Stack direction="row">
                        <Box>
                            <InputBase className={classes.InputBase} placeholder="Enter Your Cuppon" />
                        </Box>
                        <Box sx={{ ml: "15px" }}>
                            <ButtonBase sx={{ mt: "0 !important", p: "12px 18px !important" }} className={classes.Buttons}>
                                <SvgIcon viewBox="0 0 24 24">
                                    {TagIcon}
                                </SvgIcon>
                                Apply
                            </ButtonBase>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
export default CartCuppon;