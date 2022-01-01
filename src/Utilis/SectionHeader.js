import { Box, Stack, Typography } from "@mui/material";

//Styles
import useStyles from "Styles/Utilis/SectionHeader.styles";

const SectionHeader = ({ title, abbreviation, description }) => {
    const classes = useStyles();
    return (
        <Stack direction="row" className={classes.Container}>
            <Box>
                <Typography variant="h5" component="h5" className={classes.Title}>
                    {title}
                    <Typography variant="h5" component="span">
                        {abbreviation}
                    </Typography>
                </Typography>
                <Typography variant="body1" component="p" className={classes.Description}>
                    {description}
                </Typography>
            </Box>
        </Stack>
    );
};
export default SectionHeader;