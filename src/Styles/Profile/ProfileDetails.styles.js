import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    UserName: {
        fontSize: "18px",
        fontWeight: theme.typography.medium,
        marginTop: "10px",
        marginBottom: "12px"
    },
    SingleProfileInfo: {
        marginBottom: "0.5em",
        marginTop: "1.2em",
        "&& p": {
            fontSize: "13px",
            color: theme.palette.primary.gray_secondary
        },
        "&& h6": {
            fontWeight: theme.typography.medium,
            fontSize: "18px"
        }
    }
});

export default useStyles;