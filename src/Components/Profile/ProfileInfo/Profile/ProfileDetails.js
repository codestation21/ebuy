import { Box, Avatar, Typography, Grid } from "@mui/material";

//Styles
import useStyles from "Styles/Profile/ProfileDetails.styles";

//data
import ProfileData from "Data/Profile.data";

const ProfileDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <Avatar
                alt="Profile"
                src={ProfileData.avatar}
                sx={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <Typography variant="h6" component="h6" className={classes.UserName}>
                {ProfileData.name}
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                    <Box className={classes.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Email
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.email}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box className={classes.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Number
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.number}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box className={classes.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Birthday
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.dob}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box className={classes.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Gender
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.gender}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box className={classes.SingleProfileInfo}>
                <Typography variant="body1" component="p">
                    Address
                </Typography>
                <Typography variant="h6" component="h6">
                    {ProfileData.address}
                </Typography>
            </Box>
        </div>
    );
};

export default ProfileDetails;