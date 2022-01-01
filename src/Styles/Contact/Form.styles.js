import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Text: {
        "&& h6": {
            fontWeight: theme.typography.semiBold,
            color: theme.palette.primary.gray_tertiary
        },
        "&& h5": {
            fontSize: "30px",
            fontWeight: theme.typography.semiBold,
            marginBottom: "5px"
        },
        "&& p": {
            fontWeight: theme.typography.light,
            marginBottom: "25px",
            color: theme.palette.primary.gray_secondary
        }
    },
    InputBase: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        width: "100%",
        borderRadius: "8px",
        padding: "8px 12px",
        marginBottom: "10px"
    },
    SubmitButton: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        fontWeight: theme.typography.semiBold,
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "12px 20px",
        borderRadius: "12px",
        marginTop: "10px"
    },
    Image: {
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        objectFit: "cover"
    }
});

export default useStyles;