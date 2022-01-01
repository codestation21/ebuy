import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    FlexContainer: {
        marginBottom: "1.5em",
        alignItems: "center"
    },
    IconImages: {
        flex: "0 0 20%",
        textAlign: "center"
    },
    Text: {
        fontSize: "18px",
    },
    TextBold: {
        fontSize: "18px",
        fontWeight: theme.typography.semiBold
    }
});

export default useStyles;