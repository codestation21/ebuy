import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ImageContainer: {
        position: "relative",
        display: "block",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        "&:after": {
            content: '""',
            background: theme.palette.primary.image_hover,
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "-100%",
            transform: "skew(-20deg)",
            opacity: 1
        },
        "&:hover": {
            "&:after": {
                animation: "$imageEffect 1.5s"
            }
        }
    },
    "@keyframes imageEffect": {
        "0%": {
            opacity: 1,
            left: "-100%",
        },
        "50%": {
            opacity: 0,
            left: "100%",
        },
        "100%": {
            opacity: 0,
            left: "-100%",
        }
    },
    Images: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
});

export default useStyles;