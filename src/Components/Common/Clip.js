import { Box, Grid, Stack, Typography } from "@mui/material";

//Styles
import useStyles from "Styles/Common/Clip.styles";

//Data
import ClipData from "Data/Home/Clip.data";

const Clip = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            {ClipData &&
                ClipData.map((clip, i) => (
                    <Grid item md={3} sms={6} xs={12} key={i}>
                        <Stack direction="row" className={classes.Container}>
                            <Box sx={{ mr: "15px" }}>
                                <Box component="img" alt="Clip" src={clip.icon} />
                            </Box>
                            <Box>
                                <Typography variant="body1" component="p" className={classes.Title}>
                                    {clip.title}
                                </Typography>
                                <Typography variant="body1" component="span" className={classes.description}>
                                    {clip.abbreviation}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Clip;