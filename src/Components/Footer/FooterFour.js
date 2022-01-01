import { Box, Typography, Stack } from "@mui/material";

//Styles
import useStyles from "Styles/Footer/FooterFour.styles";

//Originals and Warrenty Images
import Originals from "Assets/Originals.png";
import Warrenty from "Assets/Warrenty.png";

const FooterFour = () => {
    const classes = useStyles();
    return (
        <Box sx={{ mt: "10px" }}>
            <Stack direction="row" spacing={2} className={classes.FlexContainer}>
                <Box className={classes.IconImages}>
                    <Box component="img" src={Originals} width="100%" alt="Originals" />
                </Box>
                <Box>
                    <Typography variant="body1" component="p" className={classes.Text}>
                        <Typography variant="body1" component="span" className={classes.TextBold}>
                            100% Original
                        </Typography> guarantee for all products at ebuy.com
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Box className={classes.IconImages}>
                    <Box component="img" src={Warrenty} width="85%" alt="Warrenty" />
                </Box>
                <Box>
                    <Typography variant="body1" component="p" className={classes.Text}>
                        <Typography variant="body1" component="span" className={classes.TextBold}>
                            Return within 30 days
                        </Typography> of receiving your order
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
export default FooterFour;