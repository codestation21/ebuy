import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TabTitle: {
        marginLeft: "-24px",
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        paddingLeft: "24px",
        paddingBottom: "20px",
        marginBottom: "2em",
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
});

export default useStyles;