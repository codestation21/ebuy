import { Box, Typography, InputAdornment, Stack, InputBase, ButtonBase, SvgIcon } from "@mui/material";
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Common/Sunscribe.styles";

//Custom Icon
import { PlaneIcon } from "Utilis/Icons";

const Subscribe = () => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmt = (data, e) => {
        console.log(data)
    }
    return (
        <Box className={classes.SubscribeContainer}>
            <Box sx={{ py: '4em', px: { mds: "5em", sm: "2em", sms: "0.5em", xs: "0.3em" } }}>
                <Typography variant="h4" component="h4" className={classes.SubTitle}>
                    Stay home & get your<br /> needs from our shop
                </Typography>
                <Typography variant="body1" component="p" className={classes.SubDescription}>
                    Save up to 50% off on your first order
                </Typography>
                <Stack
                    component="form"
                    direction="row"
                    onSubmit={handleSubmit(onSubmt)}
                >
                    <InputBase
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Your email address"
                        required
                        className={classes.InputField}
                        startAdornment={(
                            <InputAdornment position="start" className={classes.PlaneIcon}>
                                <SvgIcon>
                                    {PlaneIcon}
                                </SvgIcon>
                            </InputAdornment>
                        )}
                        {...register("email")}
                    />
                    <ButtonBase variant="text" type="submit" className={classes.SubmitButton}>
                        Subscribe
                    </ButtonBase>
                </Stack>
            </Box>
        </Box>
    );
};
export default Subscribe;