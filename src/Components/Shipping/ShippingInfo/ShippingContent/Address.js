import { Box, Grid, Typography, InputBase, NativeSelect, RadioGroup, FormControlLabel, Radio, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


// Styles
import useStyles from "Styles/Shipping/Address.styles";


const Address = ({ register }) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h6" component="h6">
                Shipping Address
            </Typography>
            <Box sx={{ mt: "1.5em" }}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Box>
                            <InputBase
                                id="firstNmae"
                                {...register("firstName")}
                                placeholder="First Name"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <InputBase
                                id="lastName"
                                {...register("lastName")}
                                placeholder="Last Name"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "15px" }}>
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
                    <Grid item md={6}>
                        <Box>
                            <InputBase
                                id="city"
                                {...register("city")}
                                placeholder="City"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <InputBase
                                id="zip"
                                {...register("zip")}
                                placeholder="ZIP Code"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <InputBase
                                id="email"
                                {...register("email")}
                                placeholder="Email"
                                className={classes.InputField}
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
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
                <Box sx={{ mt: "20px" }}>
                    <RadioGroup
                        aria-label="method"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="free"
                            control={<Radio />}
                            sx={{ mb: "10px", ".MuiFormControlLabel-label": { flex: 1 } }}
                            label={
                                <Stack direction="row" sx={{ alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="h6" component="h6" className={classes.RadioButtonHeading}>
                                            Standard Shipping
                                        </Typography>
                                        <Typography variant="body1" component="p" className={classes.RadioButtonText}>
                                            Delivary Within 6-10 Days
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "right" }}>
                                        <Typography variant="body1" component="p" className={classes.RadioButtonHeading}>
                                            Free
                                        </Typography>
                                    </Box>
                                </Stack>
                            }
                        />
                        <FormControlLabel
                            value="67"
                            control={<Radio />}
                            sx={{ ".MuiFormControlLabel-label": { flex: 1 } }}
                            label={
                                <Stack direction="row" sx={{ alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="h6" component="h6" className={classes.RadioButtonHeading}>
                                            Express Shipping
                                        </Typography>
                                        <Typography variant="body1" component="p" className={classes.RadioButtonText}>
                                            Delivary Within 4-6 Days
                                        </Typography>
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "right" }}>
                                        <Typography variant="body1" component="p" className={classes.RadioButtonHeading}>
                                            $10
                                        </Typography>
                                    </Box>
                                </Stack>
                            }
                        />
                    </RadioGroup>
                </Box>
            </Box>
        </Box>
    );
};
export default Address;