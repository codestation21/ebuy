import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    FooterContainer: {
        paddingLeft: "4em",
        paddingRight: "4em",
        background: theme.palette.primary.light,
        boxShadow: `0 0 25px ${theme.palette.primary.box_shadow}`,
        marginTop: "2em",
        paddingBottom: "1.5em"
    }
});

export default useStyles;