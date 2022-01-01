import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ParagraphText: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary,
        fontWeight: theme.typography.regular
    },
    TittleText: {
        fontSize: "20px",
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.main,
        marginBottom: "8px",
        marginTop: "20px"
    }
});

export default useStyles;