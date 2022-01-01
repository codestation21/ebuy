import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Images: {
        width: "100%",
        borderRadius: "10px",
        marginBottom: "30px"
    },
    NewsTitle: {
        fontSize: "25px",
        fontWeight: theme.typography.medium,
        marginBottom: "15px"
    },
    NewsDescription: {
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary,
        marginTop: "30px",
        marginBottom: "20px"
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
    Title: {
        fontSize: "20px",
        fontWeight: theme.typography.semiBold,
        marginBottom: "20px"
    },
    Textarea: {
        width: "100%",
        padding: "10px 15px",
        borderRadius: "10px",
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        marginTop: "20px"
    },
    SubmitButton: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "12px 20px",
        borderRadius: "8px",
        marginTop: "20px",
        fontSize: "16px",
        fontFamily: '"Inter"',
        fontWeight: theme.typography.medium
    }
});

export default useStyles;