import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    FooterTitle: {
        fontSize: "16px",
        fontWeight: theme.typography.medium,
        textTransform: "uppercase",
        marginBottom: "20px"
    },
    MobileDownloadBtn: {
        width: "90%",
        marginBottom: "10px"
    },
    List: {
        margin: "0",
        padding: "0",
        "&& li": {
            display: "inline",
            marginRight: "10px",
            padding: "0",
            "& a": {
                "& svg": {
                    color: theme.palette.primary.main,
                    fontSize: "25px"
                }
            }
        }
    }
});

export default useStyles;