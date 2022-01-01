import { Box, Grid, Typography, Stack, Rating, List, ListItem, ButtonBase, SvgIcon } from "@mui/material";
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

//CustomIcon
import { TwitterColorIcon, FacebookColorIcon, InstagramColorIcon, LongArrowRightIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/VendorProducts/VendorInfo.styles";

//Data
import VendorData from "Data/Vendor.data";

const VendorInfo = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <Box>
                <Grid container spacing={3}>
                    <Grid item md={2} sm={3} sms={5} xs={12}>
                        <Box component="img" width="100%" src={VendorData.image} alt="Vendor" />
                    </Grid>
                    <Grid item md={4.5} sm={9} sms={7} xs={12}>
                        <Box sx={{ flex: "0 0 75%", paddingLeft: "12px" }}>
                            <Typography variant="body2" component="p" className={classes.SinceText}>
                                Since {VendorData.createdAt}
                            </Typography>
                            <Typography variant="h5" component="h5" className={classes.Title}>
                                {VendorData.name}
                            </Typography>
                            <Stack direction="row">
                                <Rating
                                    name="read-only"
                                    value={4}
                                    precision={0.1}
                                    readOnly
                                    className={classes.Star}
                                    emptyIcon={<StarIcon fontSize="inherit" />}
                                />
                                <Box className={classes.Points}>
                                    ({VendorData.ratting})
                                </Box>
                            </Stack>
                            <Typography variant="body1" component="p" className={classes.AddressAndCell}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={5.5} sm={12} sms={12} xs={12}>
                        <Typography variant="h6" component="h6" className={classes.FollowusText}>
                            Follow The Celler
                        </Typography>
                        <List className={classes.List}>
                            <ListItem>
                                <Link href="#">
                                    <a>
                                        <ButtonBase>
                                            <SvgIcon viewBox="0 0 24 24">
                                                {TwitterColorIcon}
                                            </SvgIcon>
                                        </ButtonBase>
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">
                                    <a>
                                        <ButtonBase>
                                            <SvgIcon viewBox="0 0 24 24">
                                                {FacebookColorIcon}
                                            </SvgIcon>
                                        </ButtonBase>
                                    </a>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">
                                    <a>
                                        <ButtonBase>
                                            <SvgIcon viewBox="0 0 24 24">
                                                {InstagramColorIcon}
                                            </SvgIcon>
                                        </ButtonBase>
                                    </a>
                                </Link>
                            </ListItem>
                        </List>
                        <Typography variant="body1" component="p" className={classes.AddressAndCell}>
                            Address: {" "}
                            <Typography variant="body1" component="span">
                                {VendorData.address}
                            </Typography>
                        </Typography>
                        <Typography variant="body1" component="p" className={classes.AddressAndCell}>
                            Cell: {" "}
                            <Typography variant="body1" component="span">
                                {VendorData.cell}
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ textAlign: "right", mt: { md: "-28px", mds: "-10px", xs: "10px" } }}>
                <Link href={`tel:${VendorData.cell}`}>
                    <a>
                        <ButtonBase className={classes.ContactButton}>
                            Contact Seller
                            <SvgIcon viewBox="0 0 24 11">
                                {LongArrowRightIcon}
                            </SvgIcon>
                        </ButtonBase>
                    </a>
                </Link>
            </Box>
        </Box>
    );
};
export default VendorInfo;