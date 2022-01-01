import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TextContainer: {
        width: "55%",
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "2em",
        "&& h5": {
            fontWeight: theme.typography.medium,
            marginBottom: "10px"
        },
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "16px",
            color: theme.palette.primary.gray_secondary
        },
        "@media (max-width: 992px)": {
            width: "65%",
        },
        "@media (max-width: 768px)": {
            width: "85%",
        },
        "@media (max-width: 640px)": {
            width: "100%",
        }
    },
    ListContainer: {
        width: "65%",
        margin: "0 auto",
        marginBottom: "10px",
        "&& h6": {
            fontWeight: theme.typography.semiBold,
            marginBottom: "10px"
        },
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "15px",
            color: theme.palette.primary.gray_secondary
        },
        "@media (max-width: 992px)": {
            width: "75%",
        },
        "@media (max-width: 768px)": {
            width: "85%",
        },
        "@media (max-width: 640px)": {
            width: "100%",
        }
    }
});

export default useStyles;