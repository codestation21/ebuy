import { Box, Typography } from "@mui/material";

//Styles
import useStyles from "Styles/Product/CustomerReviews.styles";

//Components
import Reviews from "Components/Common/Reviews";

const CustomerReviews = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5" component="h5" className={classes.Title}>
                Customer Reviews
            </Typography>
            <Reviews />
        </Box>
    );
};
export default CustomerReviews;