import { Box, Avatar, Stack, Typography } from "@mui/material";

//Data
import NotificationData from "Data/Notification.data";

//styles
import useStyles from "Styles/Profile/Notification.styles";

const Notification = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.TabTitle}>
                <Typography variant="h6" component="h6">
                    Notification
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" className={classes.NotificationTitle}>
                    New
                </Typography>
                {NotificationData &&
                    NotificationData.slice(0, 1).map((notification, i) => (
                        <Stack direction="row" className={classes.Card} key={i}>
                            <Box sx={{ flex: "0 0 10%" }}>
                                <Avatar
                                    alt="Image"
                                    src={notification.image}
                                    sx={{
                                        width: "80px",
                                        height: "80px"
                                    }}
                                />
                            </Box>
                            <Box sx={{ ml: "20px", flex: "0 0 55%" }}>
                                <Typography variant="body1" component="p" className={classes.Message}>
                                    {notification.message}
                                </Typography>
                            </Box>
                            <Box sx={{ flex: { mds: "0 0 30%", sm: "0 0 24%" }, ml: "20px" }}>
                                <Typography variant="body1" component="p">
                                    {notification.time}
                                </Typography>
                            </Box>
                        </Stack>
                    ))
                }
            </Box>
            <Box>
                <Typography variant="h6" component="h6" className={classes.NotificationTitle}>
                    Earlier
                </Typography>
                {NotificationData &&
                    NotificationData.slice(1, -1).map((notification, i) => (
                        <Stack direction="row" className={classes.Card} key={i}>
                            <Box sx={{ flex: "0 0 10%" }}>
                                <Avatar
                                    alt="Image"
                                    src={notification.image}
                                    sx={{
                                        width: "80px",
                                        height: "80px"
                                    }}
                                />
                            </Box>
                            <Box sx={{ ml: "20px", flex: "0 0 55%" }}>
                                <Typography variant="body1" component="p" className={classes.Message}>
                                    {notification.message}
                                </Typography>
                            </Box>
                            <Box sx={{ flex: { mds: "0 0 30%", sm: "0 0 24%" }, ml: "20px" }}>
                                <Typography variant="body1" component="p">
                                    {notification.time}
                                </Typography>
                            </Box>
                        </Stack>
                    ))
                }
            </Box>
        </Box >
    );
};
export default Notification;