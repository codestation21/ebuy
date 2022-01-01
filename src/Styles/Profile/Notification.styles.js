import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TabTitle: {
        marginLeft: "-24px",
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        paddingLeft: "24px",
        paddingBottom: "20px",
        marginBottom: "2em",
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
    NotificationTitle: {
        fontSize: "18px",
        fontWeight: theme.typography.semiBold,
        marginBottom: "0.8em"
    },
    Card: {
        alignItems: "center",
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        padding: "15px 20px",
        borderRadius: "10px",
        marginBottom: "10px"
    },
    Message: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary
    }
});

export default useStyles;