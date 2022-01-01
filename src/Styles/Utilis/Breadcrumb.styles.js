import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        padding: "12px 4em",
        marginBottom: "20px",
        marginTop: "20px",
        borderTop: `1px solid ${theme.palette.primary.black_opacity_secondary}`,
        borderBottom: `1px solid ${theme.palette.primary.black_opacity_secondary}`,
        "@media (max-width: 360px)": {
            padding: "12px 1em",
        }
    },
    Link: {
        textDecoration: "none",
        color: theme.palette.primary.main_quaternary
    },
    HomeIcon: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        "&& svg": {
            fontSize: "20px",
            marginBottom: "-2px"
        },
        "&& span": {
            fontWeight: theme.typography.bold,
            marginLeft: "8px"
        }
    },
    Separator: {
        fontSize: "8px !important",
        marginBottom: "-4px"
    },
    Typography: {
        color: theme.palette.primary.main_quaternary,
        fontSize: "16px"
    }
});

export default useStyles;