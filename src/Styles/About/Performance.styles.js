import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    smallImage: {
        flex: "0 0 43%",
        height: "50%",
        marginRight: "10px",
        height: "380px",
        marginTop: "28px",
        "&& img": {
            width: "100%",
            height: "100%",
            borderRadius: "10px"
        }
    },
    largeImage: {
        flex: "0 0 55%",
        height: "440px",
        "&& img": {
            width: "100%",
            height: "100%",
            borderRadius: "10px"
        }
    },
    HeaderTitle: {
        fontSize: "24px",
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.gray_tertiary
    },
    Title: {
        fontSize: "45px",
        fontWeight: theme.typography.medium,
        marginBottom: "20px",
        marginTop: "10px",
        "@media (max-width: 480px)": {
            fontSize: "30px",
        }
    },
    Description: {
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary
    },
    FaqTitle: {
        fontSize: "20px",
        fontWeight: theme.typography.medium,
        marginBottom: "10px",
    },
    FaqDescription: {
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary
    }
});

export default useStyles;