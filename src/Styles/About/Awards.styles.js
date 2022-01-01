import { makeStyles } from "@mui/styles";
import theme from "Theme";

//Background Image
import CounterBg from "Assets/about/counter-bg.png";


const useStyles = makeStyles({
    Container: {
        background: `url("${CounterBg}")`,
        position: "relative",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "3.2em 2em",
        borderRadius: "10px",
        "&:after": {
            content: '""',
            background: theme.palette.primary.main,
            whiteSpace: " ",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "10px",
            opacity: 0.6
        }
    },
    Content: {
        position: "relative",
        zIndex: "9",
        color: theme.palette.primary.light
    },
    Counts: {
        fontSize: "35px",
        fontWeight: theme.typography.semiBold
    },
    Description: {
        fontWeight: theme.typography.medium
    }
});

export default useStyles;