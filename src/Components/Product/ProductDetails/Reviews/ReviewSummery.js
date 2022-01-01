import { Box, Stack, Rating, Typography, LinearProgress } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";

//Styles
import useStyles from "Styles/Product/ReviewSummery.styles";

const ReviewSummery = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5" component="h5" className={classes.Title}>
                Review Summery
            </Typography>
            <Stack direction="row" sx={{ alignItems: "center", mb: "30px" }}>
                <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={4}
                    readOnly
                    className={classes.Star}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                />
                <Typography variant="body1" component="p" className={classes.RattingPointText}>
                    4.8 out of 5
                </Typography>
            </Stack>
            <Box>
                <Stack direction="row" sx={{ alignItems: "center", mb: "10px" }}>
                    <Box>
                        <Typography variant="body1" component="p" className={classes.ProgressText}>
                            5 star
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={30}
                            className={classes.ProgressBar}
                        />
                        <Box className={classes.ProgressLabel} sx={{ width: "30%" }}>
                            30%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "10px" }}>
                    <Box>
                        <Typography variant="body1" component="p" className={classes.ProgressText}>
                            5 star
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={60}
                            className={classes.ProgressBar}
                        />
                        <Box className={classes.ProgressLabel} sx={{ width: "60%" }}>
                            60%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "10px" }}>
                    <Box>
                        <Typography variant="body1" component="p" className={classes.ProgressText}>
                            5 star
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={35}
                            className={classes.ProgressBar}
                        />
                        <Box className={classes.ProgressLabel} sx={{ width: "35%" }}>
                            35%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "10px" }}>
                    <Box>
                        <Typography variant="body1" component="p" className={classes.ProgressText}>
                            5 star
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={90}
                            className={classes.ProgressBar}
                        />
                        <Box className={classes.ProgressLabel} sx={{ width: "90%" }}>
                            90%
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "10px" }}>
                    <Box>
                        <Typography variant="body1" component="p" className={classes.ProgressText}>
                            5 star
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <LinearProgress
                            variant="determinate"
                            value={80}
                            className={classes.ProgressBar}
                        />
                        <Box className={classes.ProgressLabel} sx={{ width: "80%" }}>
                            80%
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Typography variant="body1" component="p">
                <Link href="/">
                    <a className={classes.BottomLinkedText}>
                        How are ratings calculated?
                    </a>
                </Link>
            </Typography>
        </Box>
    );
};
export default ReviewSummery;