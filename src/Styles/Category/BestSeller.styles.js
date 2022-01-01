import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    List: {
        padding: "10px 5px",
        "&& li": {
            padding: "0",
            margin: "5px 0",
            "& button": {
                fontFamily: '"Inter"',
                fontSize: "15px",
                textTransform: "uppercase",
                width: "100%",
                padding: "3px 10px",
                borderRadius: "3px",
                justifyContent: "left"
            }
        }

    }
});

export default useStyles;