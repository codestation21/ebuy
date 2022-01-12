import { useState } from "react";
import { Box, Grid, Stack, Typography, Rating, ButtonBase, SvgIcon } from "@mui/material";
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

//Custom Icon
import { LongArrowRightIcon } from "Utilis/Icons";

//Paginations
import Paginations from "Components/Common/Paginations";

//Styles
import useStyles from "Styles/Vendor/VendorList.styles";

//Data
import VendorsData from "Data/Vendors.data";

const Vendors = () => {
    const [page, setPage] = useState(1);
    const classes = useStyles();
    return (
        <Box>
            <Grid container spacing={3}>
                {VendorsData &&
                    VendorsData.map((vendor, i) => (
                        <Grid item md={6} xs={12} key={i}>
                            <Stack direction="row" className={classes.CardContainer}>
                                <Box sx={{ flex: { lg: "0 0 25%", md: "0 0 45%", sm: "0 0 30%", sms: "0 0 45%", xs: "100%" }, mb: { sms: "0px", xs: "20px" }, mt: { sms: "0px", xs: "20px" }, paddingRight: "12px" }}>
                                    <Box component="img" width="100%" src={vendor.image} alt={vendor.name} />
                                    <Typography variant="body1" component="p" className={classes.ProductCounts}>
                                        {vendor.products} Product(s)
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: { lg: "0 0 75%", md: "0 0 55%", sm: "0 0 70%", sms: "0 0 55%", xs: "100%" }, paddingLeft: "12px" }}>
                                    <Typography variant="body2" component="p" className={classes.SinceText}>
                                        Since {vendor.createdAt}
                                    </Typography>
                                    <Typography variant="h5" component="h5" className={classes.Title}>
                                        {vendor.name}
                                    </Typography>
                                    <Stack direction="row">
                                        <Rating
                                            name="read-only"
                                            value={vendor.rating}
                                            precision={0.1}
                                            readOnly
                                            className={classes.Star}
                                            emptyIcon={<StarIcon fontSize="inherit" />}
                                        />
                                        <Box className={classes.Points}>
                                            ({vendor.rating})
                                        </Box>
                                    </Stack>
                                    <Typography variant="body1" component="p" className={classes.AddressAndCell}>
                                        Address: {" "}
                                        <Typography variant="body1" component="span">
                                            {vendor.address}
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body1" component="p" className={classes.AddressAndCell}>
                                        Cell: {" "}
                                        <Typography variant="body1" component="span">
                                            {vendor.cell}
                                        </Typography>
                                    </Typography>
                                    <Box sx={{ textAlign: "right", mt: { sms: "0px", xs: "20px" } }}>
                                        <Link href="/vendors/products/index">
                                            <a>
                                                <ButtonBase className={classes.ViewButton}>
                                                    Visit Store
                                                    <SvgIcon viewBox="0 0 24 11">
                                                        {LongArrowRightIcon}
                                                    </SvgIcon>
                                                </ButtonBase>
                                            </a>
                                        </Link>
                                    </Box>
                                </Box>
                                {vendor?.badge &&
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        className={classes.Badge}
                                        sx={{
                                            background: `${vendor.badge === "Mall" ? "#F74B81" : "#F59758"}`
                                        }}
                                    >
                                        {vendor.badge}
                                    </Typography>
                                }
                            </Stack>
                        </Grid>
                    ))
                }
            </Grid>
            <Paginations
                count={6}
                setPage={setPage}
            />
        </Box >
    );
};

export default Vendors;