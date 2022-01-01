import { useState, useEffect } from 'react';
import { Box, Grid, Tab, ButtonBase, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useWindowDimensions from 'Utilis/Screen';

//Theme
import theme from "Theme";

//Styles
import useStyles from 'Styles/Profile/ProfileInfo.styles';

//Components
import Profile from "./ProfileInfo/Profile";
import Order from "./ProfileInfo/Order";
import Wishlist from "./ProfileInfo/Wishlist";
import Reviews from "./ProfileInfo/Review";
import ReturnOrder from "./ProfileInfo/ReturnOrder";
import Notification from "./ProfileInfo/Notification";

const ProfileInfo = () => {
    const [value, setValue] = useState('1');
    const { width } = useWindowDimensions();
    const [orientation, setOrientation] = useState("vertical");
    const [scrollBtn, setScrollBtn] = useState(false);
    const classes = useStyles();
    const TabLabel = ["My Profile", "My Order", "My Wishlist", "My Reviews", "Return Order", "Notification"]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        if (width >= 992) {
            setOrientation("vertical");
            setScrollBtn(false);
        } else {
            setOrientation("horizontal");
            setScrollBtn(true);
        }
    }, [width])
    return (
        <Box>
            <TabContext value={value}>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={12} className={classes.Sticky}>
                        <Box>
                            <Typography variant="h2" component="h2" className={classes.PageTitlte}>
                                Profile
                            </Typography>
                            <TabList
                                onChange={handleChange}
                                orientation={orientation}
                                variant="scrollable"
                                scrollButtons={scrollBtn}
                                aria-label="Vertical tabs example"
                                TabIndicatorProps={{
                                    style: {
                                        display: "none",
                                    }
                                }}
                            >
                                {TabLabel &&
                                    TabLabel.map((label, i) => (
                                        <Tab
                                            key={i}
                                            label={label}
                                            icon={<ArrowRightIcon />}
                                            value={(i + 1).toString()}
                                            iconPosition="end"
                                            className={classes.TabButton}
                                        />
                                    ))

                                }
                                <ButtonBase className={classes.LogoutButton}>
                                    <Typography variant="h6" component="h6">
                                        Logout
                                    </Typography>
                                </ButtonBase>
                            </TabList>
                        </Box>
                    </Grid>
                    <Grid item lg={9} xs={12}>
                        <Box sx={{ borderLeft: `1px solid ${theme.palette.primary.gray_primary}`, ml: "10px" }}>
                            <TabPanel value="1"><Profile /></TabPanel>
                            <TabPanel value="2"><Order /></TabPanel>
                            <TabPanel value="3"><Wishlist /></TabPanel>
                            <TabPanel value="4"><Reviews /></TabPanel>
                            <TabPanel value="5"><ReturnOrder /></TabPanel>
                            <TabPanel value="6"><Notification /></TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </TabContext>
        </Box>
    );
};
export default ProfileInfo;