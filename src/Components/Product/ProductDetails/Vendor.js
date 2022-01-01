import { Box, Stack, Typography, Rating, SvgIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

//Custom Icon
import { MapIcon, ProfileDoubleIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Product/Vendor.styles";

//Data
import VendorData from "Data/Vendor.data";

const Vendor = () => {
    const classes = useStyles();
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center", flexWrap: { sms: "unset", xs: "wrap" } }}>
                <Box sx={{ flex: { mds: "0 0 10%", sm: "0 0 20%", xs: "0 0 100%" } }}>
                    <Box component="img" width="100%" src={VendorData.image} alt="image" />
                </Box>
                <Box sx={{ ml: { sm: "20px", xs: "0px" }, flex: { sm: "unset", xs: "0 0 100%" } }}>
                    <Typography variant="h6" component="h6" className={classes.Name}>
                        {VendorData.name}
                    </Typography>
                    <Stack direction="row">
                        <Rating
                            name="half-rating-read"
                            defaultValue={5}
                            precision={4}
                            readOnly
                            className={classes.Star}
                            emptyIcon={<StarIcon fontSize="inherit" />}
                        />
                        <Box sx={{ mt: "-2px", ml: "2px" }}>
                            (22 reviews)
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            <Box sx={{ my: "2em" }}>
                <Stack direction="row" className={classes.SellerContactInfo}>
                    <SvgIcon viewBox="0 0 17 23">
                        {MapIcon}
                    </SvgIcon>
                    <Typography variant="body1" component="p">
                        {VendorData.address}
                    </Typography>
                </Stack>
                <Stack direction="row" className={classes.SellerContactInfo}>
                    <SvgIcon viewBox="0 0 20 24">
                        {ProfileDoubleIcon}
                    </SvgIcon>
                    <Typography variant="body1" component="p">
                        {VendorData.cell}
                    </Typography>
                </Stack>
            </Box>
            <Stack direction="row" sx={{ mb: "30px", flexWrap: { sms: "unset", xs: "wrap" } }}>
                <Box className={classes.SuccessBox}>
                    <Typography variant="body1" component="p">
                        Rating
                    </Typography>
                    <Typography variant="h3" component="h3">
                        92%
                    </Typography>
                </Box>
                <Box className={classes.SuccessBox}>
                    <Typography variant="body1" component="p">
                        Ship on time
                    </Typography>
                    <Typography variant="h3" component="h3">
                        100%
                    </Typography>
                </Box>
                <Box className={classes.SuccessBox}>
                    <Typography variant="body1" component="p">
                        Chat response
                    </Typography>
                    <Typography variant="h3" component="h3">
                        89%
                    </Typography>
                </Box>
            </Stack>
            <Typography variant="body1" component="p" className={classes.Details}>
                {VendorData.details}
            </Typography>
        </Box>
    );
};
export default Vendor;