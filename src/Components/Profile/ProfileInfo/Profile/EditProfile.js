import { useState } from "react";
import { Box, Avatar, Grid, Typography, InputBase, NativeSelect, InputLabel } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

//Styles
import useStyles from "Styles/Profile/EditProfile.styles";

//AvatarPreview
import Profile from "Assets/backend/profile.png";

const EditProfile = ({ register }) => {
    const [password, setPassword] = useState(false);
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <InputBase
                    id="picture"
                    type="file"
                    sx={{ display: "none" }}
                />
                <InputLabel htmlFor="picture" className={classes.PictureLabel}>
                    <Avatar
                        alt="Profile"
                        src={Profile}
                        sx={{
                            width: "100px",
                            height: "100px"
                        }}
                    />
                    <Box className={classes.AddIcon}>
                        <AddIcon />
                    </Box>
                </InputLabel>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" className={classes.TitleText}>
                    Account Information
                </Typography>
                <Grid container spacing={2}>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="firstName"
                                placeholder="First Name"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="lastName"
                                placeholder="Last Name"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="email"
                                placeholder="Email"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="number"
                                placeholder="Number"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ position: "relative", mt: "15px" }}>
                    <InputBase
                        id="password"
                        type={password ? "text" : "password"}
                        placeholder="Password"
                        className={classes.InputField}
                    />
                    <Box className={classes.ShowOrHidePassword}>
                        {!password &&
                            <Typography variant="body1" component="p" onClick={() => setPassword(true)}>
                                show
                            </Typography>
                        }
                        {password &&
                            <Typography variant="body1" component="p" onClick={() => setPassword(false)}>
                                hide
                            </Typography>
                        }
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" className={classes.TitleText}>
                    Set Address
                </Typography>
                <Box>
                    <NativeSelect className={classes.Select}>
                        <option value="">Country/Region</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="china">China</option>
                        <option value="japan">Japan</option>
                        <option value="america">America</option>
                    </NativeSelect>
                </Box>
                <Box>
                    <InputBase
                        id="address"
                        {...register("address")}
                        placeholder="Address"
                        className={classes.InputField}
                    />
                </Box>
                <Typography variant="body1" component="p" className={classes.AdditionalInfo}>
                    <AddIcon />
                    Aditional Address
                </Typography>
                <Grid container spacing={2}>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="city"
                                {...register("city")}
                                placeholder="City"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="zip"
                                {...register("zip")}
                                placeholder="ZIP Code"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="email"
                                {...register("email")}
                                placeholder="Email"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item sms={6}>
                        <Box>
                            <InputBase
                                id="phone"
                                {...register("phone")}
                                placeholder="Phone"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};
export default EditProfile;