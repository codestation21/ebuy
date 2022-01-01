import { useState } from "react";
import { Box, Stack, Typography, InputBase, InputLabel, ButtonBase, SvgIcon, FormControlLabel, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";

//Custom Icon
import { EyeIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Header/Register.styles";

const Login = ({ setRegister }) => {
    const [password, setPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const classes = useStyles();
    const onSubmit = (data, e) => {
        console.log(data)
    }
    const passwordHandler = () => {
        setPassword(!password)
    }
    return (
        <Box>
            <Typography variant="body1" component="p" className={classes.TermsText}>
                Login with your email & password
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, mb: "10px" }}>
                <Box sx={{ mb: "5px" }}>
                    <InputLabel htmlFor="email" className={classes.FormLabel}>
                        Email
                    </InputLabel>
                    <InputBase
                        id="email"
                        type="text"
                        {...register("email")}
                        className={classes.FormInput}
                    />
                </Box>
                <Box>
                    <InputLabel htmlFor="password" className={classes.FormLabel}>
                        Password
                    </InputLabel>
                    <Box sx={{ position: "relative" }}>
                        <InputBase
                            id="password"
                            type={password ? "text" : "password"}
                            {...register("password")}
                            className={classes.FormInput}
                        />
                        <Box
                            className={`${classes.EyIcon} ${password ? "visible" : ""}`}
                            onClick={passwordHandler}
                        >
                            <SvgIcon viewBox="0 0 24 14">
                                {EyeIcon}
                            </SvgIcon>
                        </Box>
                    </Box>
                </Box>
                <Stack direction="row" sx={{ alignItems: "center !important" }}>
                    <Box>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox />}
                            label="Remember me"
                            labelPlacement="end"
                        />
                    </Box>
                    <Box
                        className={classes.ForgetPassword}
                        onClick={() => setRegister("forgetpass")}
                    >
                        <Typography variant="body1" component="p">
                            Forget Password?
                        </Typography>
                    </Box>
                </Stack>
                <Box>
                    <ButtonBase type="submit" className={classes.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Login
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;