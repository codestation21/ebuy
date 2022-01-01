import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        border: `1px solid ${theme.palette.primary.main}`,
        height: "100px",
        paddingLeft: "20px",
        paddingRight: "10px",
        borderRadius: "7px",
        alignItems: "center",
        marginBottom: "3em",
        "@media (max-width: 992px)": {
            marginBottom: "10px"
        }
    },
    Title: {
        fontWeight: theme.typography.medium,
        fontSize: "16px"
    },
    description: {
        fontSize: "15px",
        fontWeight: theme.typography.regular
    }
});

export default useStyles;