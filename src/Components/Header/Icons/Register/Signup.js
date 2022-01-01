import { useState } from "react";
import { Box, Typography, InputBase, InputLabel, ButtonBase, SvgIcon } from "@mui/material";
import { useForm } from "react-hook-form";

//Custom Icon
import { EyeIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Header/Register.styles";


const Signup = () => {
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
                By sing up, you agree to our terms & policy
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, mb: "10px" }}>
                <Box sx={{ mb: "5px" }}>
                    <InputLabel htmlFor="name" className={classes.FormLabel}>
                        Name
                    </InputLabel>
                    <InputBase
                        id="name"
                        type="text"
                        {...register("name")}
                        className={classes.FormInput}
                    />
                </Box>
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
                <Box>
                    <ButtonBase type="submit" className={classes.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Register
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};
export default Signup;