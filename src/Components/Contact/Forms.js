import { Box, Grid, Typography, InputBase, ButtonBase } from "@mui/material";
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Contact/Form.styles";

//Images
import Contact from "Assets/contact.png";

const Forms = () => {
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
        <Box sx={{ mt: "3em" }}>
            <Grid container spacing={5}>
                <Grid item md={7.5} xs={12}>
                    <Box sx={{ py: "1.5em" }}>
                        <Box className={classes.Text}>
                            <Typography variant="h6" component="h6">
                                Contact Form
                            </Typography>
                            <Typography variant="h5" component="h5">
                                Drop us a Line
                            </Typography>
                            <Typography variant="body1" component="p">
                                Your email address will not be published. Required fields are marked <Typography variant="body1" component="span">
                                    *
                                </Typography>
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <InputBase
                                    multiline
                                    minRows={7}
                                    placeholder="Message *"
                                    className={classes.InputBase}
                                />
                            </Box>
                            <Grid container spacing={1.5}>
                                <Grid item xs={6}>
                                    <InputBase
                                        placeholder="Name *"
                                        className={classes.InputBase}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputBase
                                        placeholder="Phone *"
                                        className={classes.InputBase}
                                    />
                                </Grid>
                            </Grid>
                            <Box>
                                <InputBase
                                    placeholder="Email *"
                                    className={classes.InputBase}
                                />
                            </Box>
                            <Box>
                                <ButtonBase type="submit" className={classes.SubmitButton}>
                                    Send Message
                                </ButtonBase>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4.5} xs={12}>
                    <Box component="img" className={classes.Image} src={Contact} alt="Contact" />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Forms;