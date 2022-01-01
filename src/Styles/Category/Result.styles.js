import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    PageInfo: {
        marginTop: "-27px",
        fontWeight: theme.typography.light,
        fontSize: "15px",
        "@media (max-width: 480px)": {
            marginTop: "10px",
            textAlign: "center"
        }
    },
    PageInfoSpaces: {
        marginTop: "12px",
        fontWeight: theme.typography.light,
        fontSize: "15px"
    }
});

export default useStyles;