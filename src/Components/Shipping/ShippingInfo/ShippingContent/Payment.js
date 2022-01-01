import { useState } from "react";
import { Box, Stack, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";

//styles
import useStyles from "Styles/Shipping/Payment.styles";

//Images
import Paypal from "Assets/payment/paypal.png";
import Card from "Assets/payment/card.png";
import Mobile from "Assets/payment/mobile.png";

const Payment = ({ register }) => {
    const classes = useStyles();
    const [payments, setPayments] = useState("");
    const paymentHander = (payment) => {
        setPayments(payment)
    }
    return (
        <Box>
            <Typography variant="h6" component="h6">
                Payment Method
            </Typography>
            <Box sx={{ mt: "1.5em" }}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Box
                            onClick={() => paymentHander("paypal")}
                            className={`${classes.PaymentCard} ${payments === "paypal" ? "selected" : ""}`}
                        >
                            <Box component="img" width="135px" src={Paypal} alt="Paypal" />
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Stack
                            direction="row"
                            className={`${classes.PaymentCard} ${payments === "card" ? "selected" : ""}`}
                            onClick={() => paymentHander("card")}
                        >
                            <Box component="img" src={Card} alt="Card" className={classes.smallImages} />
                            <Typography variant="body1" component="p" className={classes.Text}>
                                Debit or credit card
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={4}>
                        <Stack
                            direction="row"
                            className={`${classes.PaymentCard} ${payments === "mobile" ? "selected" : ""}`}
                            onClick={() => paymentHander("mobile")}
                        >
                            <Box component="img" src={Mobile} alt="Mobile" className={classes.smallImages} />
                            <Typography variant="body1" component="p" className={classes.Text}>
                                Mobile banking
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ mt: "2em" }}>
                    <FormControlLabel
                        value="saveData"
                        control={<Checkbox />}
                        label={
                            <Typography variant="body1" component="p" className={classes.CheckBoxText}>
                                Save data for future parchases
                            </Typography>
                        }
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="terms"
                        control={<Checkbox />}
                        label={
                            <Typography variant="body1" component="p" className={classes.CheckBoxText}>
                                I confirm that i have read and understood the Terms and conditions and Privacy policy
                            </Typography>
                        }
                        labelPlacement="end"
                    />
                </Box>
            </Box>
        </Box>
    );
};
export default Payment;