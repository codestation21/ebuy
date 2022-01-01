import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    EditAndSaveButton: {
        background: theme.palette.primary.main,
        width: "22%",
        padding: "10px 0",
        borderRadius: "5px",
        marginTop: "60px",
        color: theme.palette.primary.light,
        "&& p": {
            fontSize: "16px",
            fontWeight: theme.typography.semiBold,
        }
    },
    CancelButton: {
        padding: "10px 0",
        marginTop: "60px",
        marginLeft: "10px",
        width: "13%",
        borderRadius: "5px",
        "&& p": {
            fontSize: "16px",
            fontWeight: theme.typography.semiBold,
        }
    }
});

export default useStyles;