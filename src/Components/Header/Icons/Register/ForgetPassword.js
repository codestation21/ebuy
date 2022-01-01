import { Box, Typography, InputBase, InputLabel, ButtonBase } from "@mui/material";
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Header/Register.styles";

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const classes = useStyles();
    const onSubmit = (data, e) => {
        console.log(data)
    }
    return (
        <Box>
            <Typography variant="body1" component="p" className={classes.TermsText}>
                We’ll send you a link to reset your password
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
                    <ButtonBase type="submit" className={classes.SubmitButton}>
                        <Typography variant="body1" component="p">
                            Reset Password
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};
export default ForgetPassword;