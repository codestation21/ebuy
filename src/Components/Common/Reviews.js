import { Box, Stack, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

//Styles
import useStyles from "Styles/Common/Reviews.styles";

//Data
import ReviewsData from "Data/Reviews.data";

const Reviews = () => {
    const classes = useStyles();
    return (
        <Box>
            {ReviewsData &&
                ReviewsData.map((review, i) => (
                    <Stack
                        direction="row"
                        key={i}
                        className={classes.ReviewBox}
                        sx={{ ml: `${(i + 1) % 2 == 0 ? "30px" : "0px"}`, flexWrap: { sms: "unset", xs: "wrap" } }}
                    >
                        <Box className={classes.ImageBox}>
                            <Box component="img" src={review.image} alt={review.name} />
                            <Typography variant="body1" component="p">
                                {review.name}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: { sms: "unset", xs: "100%" } }}>
                            <Stack direction="row" sx={{ alignItems: "center", mb: "10px", flexWrap: { sms: "unset", xs: "wrap" } }}>
                                <Typography variant="body1" component="p" className={classes.Date} sx={{ mb: { sms: "0", xs: "10px" } }}>
                                    {review.time}
                                </Typography>
                                <Box sx={{ textAlign: "right", flex: 1 }}>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={5}
                                        precision={4}
                                        readOnly
                                        className={classes.Star}
                                        emptyIcon={<StarIcon fontSize="inherit" />}
                                    />
                                </Box>
                            </Stack>
                            <Box>
                                <Typography variant="body1" component="p" className={classes.Comments}>
                                    {review.comment}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    );
};
export default Reviews;