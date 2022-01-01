import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    List: {
        padding: "0",
        margin: "0",
        position: "relative",
        "&:after": {
            content: '""',
            background: theme.palette.primary.gray_primary,
            width: "1px",
            height: "100%",
            position: "absolute",
            left: "50%",
            top: "0"
        },
        "&& li": {
            padding: "8px 15px",
            margin: "4px 0",
            borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
            "&:first-child": {
                borderTop: `1px solid ${theme.palette.primary.gray_primary}`
            },
            "& p": {
                fontSize: "16px",
                color: theme.palette.primary.gray_secondary,
                flex: "0 0 50%"
            }
        }
    }
});

export default useStyles;