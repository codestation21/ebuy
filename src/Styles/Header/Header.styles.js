import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Header: {
        paddingTop: "3px",
        paddingBottom: "3px",
        position: "fixed",
        zIndex: "9999999",
        top: "0",
        width: "100%",
        transition: "box-shadow 0.2s ease",
        "&.sticky": {
            background: theme.palette.primary.light,
            boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`
        }
    }
});
export default useStyles;