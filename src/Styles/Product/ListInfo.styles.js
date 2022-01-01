import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    List: {
        "&& li": {
            margin: "5px 0",
            padding: "0",
            position: "relative",
            paddingLeft: "15px",
            "&:after": {
                content: '""',
                background: theme.palette.primary.gray_secondary,
                width: "8px",
                height: "8px",
                left: "0",
                position: "absolute",
                borderRadius: "50%",
                top: "50%",
                transform: "translateY(-50%)"
            },
            "& h6": {
                flex: "0 0 20%",
                color: theme.palette.primary.gray_secondary
            },
            "& p": {
                color: theme.palette.primary.gray_secondary
            }
        }
    }
});

export default useStyles;