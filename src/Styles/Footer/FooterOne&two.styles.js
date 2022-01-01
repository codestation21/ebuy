import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    FooterTitle: {
        fontSize: "16px",
        fontWeight: theme.typography.medium,
        textTransform: "uppercase"
    },
    Link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.primary.black_hover,
        }
    },
    ListItem: {
        padding: "0",
        margin: "6px 0",
        fontSize: "16px",
        fontWeight: theme.typography.light,
    }
});

export default useStyles;

// Use for footerOne and Footer two Components