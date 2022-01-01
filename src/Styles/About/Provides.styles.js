import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        textAlign: "center",
        padding: "7em 3em",
        borderRadius: "10px",
        "@media (max-width: 480px)": {
            padding: "2em 0.5em",
        }
    },
    Titlte: {
        fontWeight: theme.typography.semiBold,
        fontSize: "18px",
        marginTop: "10px"
    },
    Description: {
        fontWeight: theme.typography.extraLight,
        fontSize: "16px",
        marginTop: "10px"
    }
});

export default useStyles;