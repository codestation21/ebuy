import { Box, Typography } from "@mui/material";

//Componenst
import Reviews from "Components/Common/Reviews";

//Styles
import useStyles from "Styles/Profile/Review.styles";

const Review = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.TabTitle}>
                <Typography variant="h5" component="h5">
                    Reviews
                </Typography>
            </Box>
            <Reviews />
        </Box>
    );
};
export default Review;