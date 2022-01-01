import { Box, ButtonBase, Stack, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Theme
import theme from "Theme";

//Styles
import useStyles from "Styles/Shipping/Summery.styles";

const Summery = ({ setActiveStep, activeStep, steps }) => {
    const classes = useStyles();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box sx={{ mt: "20px" }}>
            <Typography variant="h6" component="h6">
                Order Summery
            </Typography>
            <Box className={classes.SummeryContainer}>
                <List className={classes.List}>
                    <ListItem direction="row">
                        <Typography variant="body1" component="h6">
                            Subtotal
                        </Typography>
                        <Typography variant="body1" component="p">
                            $450
                        </Typography>
                    </ListItem>
                    <ListItem direction="row">
                        <Typography variant="body1" component="h6">
                            Shipping
                        </Typography>
                        <Typography sx={{ color: `${theme.palette.primary.gray_secondary} !important` }} variant="body1" component="p">
                            $50
                        </Typography>
                    </ListItem>
                    <ListItem direction="row">
                        <Typography variant="body1" component="h6">
                            Estimate for
                        </Typography>
                        <Typography sx={{ color: `${theme.palette.primary.gray_secondary} !important` }} variant="body1" component="p">
                            United Kingdom
                        </Typography>
                    </ListItem>
                    <ListItem direction="row">
                        <Typography variant="body1" component="h6">
                            Total
                        </Typography>
                        <Typography variant="body1" component="p">
                            $500
                        </Typography>
                    </ListItem>
                </List >
                <Stack>
                    <Box className={classes.NextButtons}>
                        {activeStep >= steps - 1 &&
                            <ButtonBase
                                type="submit"
                            >Pay</ButtonBase>
                        }
                        {activeStep < steps - 1 &&
                            <ButtonBase onClick={handleNext}>Next</ButtonBase>
                        }
                    </Box>
                    <Box className={classes.BackButton}>
                        {activeStep > 0 &&
                            <ButtonBase
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back{" "}
                                {activeStep === 1 ? "Order" : (activeStep === 2 ? "Shipping" : "")}
                            </ButtonBase>
                        }
                        {activeStep === 0 &&
                            <Link href="/">
                                <a>
                                    <ButtonBase
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back Cart
                                    </ButtonBase>
                                </a>
                            </Link>
                        }
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};
export default Summery;