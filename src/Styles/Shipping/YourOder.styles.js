import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ButtonContainer: {
        flex: 1,
        textAlign: "right"
    },
    Button: {
        color: theme.palette.primary.delete_color,
        fontSize: "16px",
        fontFamily: '"Inter"',
        padding: "6px 10px",
        borderRadius: "4px",
        "&& svg": {
            fontSize: "20px",
            marginRight: "3px",
        }
    }
});

export default useStyles;