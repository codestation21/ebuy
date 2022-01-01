import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Images: {
        width: "100%",
        borderRadius: "10px",
        marginBottom: "10px"
    },
    Newses: {
        "&& h6": {
            fontSize: "25px",
            fontWeight: theme.typography.semiBold,
            marginBottom: "5px"
        },
        "&& p": {
            fontWeight: theme.typography.light,
            color: theme.palette.primary.gray_secondary,
            marginBottom: "10px"
        }
    },
    ViewsAndComment: {
        fontWeight: theme.typography.light,
        marginRight: "2em",
        color: theme.palette.primary.gray_secondary,
        "&& svg": {
            marginBottom: "-4px",
            marginRight: "3px",
            fontSize: "20px"
        }
    },
    Button: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "8px 15px",
        borderRadius: "5px",
        fontFamily: '"Inter"',
        fontSize: "16px",
        fontWeight: theme.typography.semiBold,
        "&& svg": {
            fontSize: "20px",
            marginLeft: "10px",
            marginBottom: "-2px"
        },
        "@media (max-width: 480px)": {
            fontSize: "12px",
            padding: "5px 10px",
        }
    }
});

export default useStyles;