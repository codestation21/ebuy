import { Box, Typography } from "@mui/material";

//Components
import ListInfo from "./Description/ListInfo";

//styles
import useStyles from "Styles/Product/Description.styles";

//Data
import singleData from "Data/product.data";

const Description = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Typography variant="body1" component="p" className={classes.ParagraphText}>
                    {singleData.details}
                </Typography>
                <ListInfo />
            </Box>
            <Box>
                <Typography variant="h5" component="h5" className={classes.TittleText}>
                    Packaging & Delivery
                </Typography>
                <Typography variant="body1" component="p" className={classes.ParagraphText}>
                    {singleData.packaginAndDelivery}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" className={classes.TittleText}>
                    Suggested Use
                </Typography>
                <Typography variant="body1" component="p" className={classes.ParagraphText}>
                    {singleData.suggestedUse}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" className={classes.TittleText}>
                    Other Information
                </Typography>
                <Typography variant="body1" component="p" className={classes.ParagraphText}>
                    {singleData.otherInformation}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" className={classes.TittleText}>
                    Warnings
                </Typography>
                <Typography variant="body1" component="p" className={classes.ParagraphText}>
                    {singleData.warnings}
                </Typography>
            </Box>
        </Box>
    );
};
export default Description;