import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    KeenSlider: {
        height: "483px"
    },
    SingleSlide: {
        cursor: "pointer"
    },
    Images: {
        width: "100%",
        height: "100%",
        borderRadius: "6px",
        objectFit: "cover",
        objectPosition: "top center"
    },
    ArrowButtonGroup: {
        marginTop: "10px",
        "&& button": {
            flex: 1,
            background: theme.palette.primary.gray_primary,
            padding: "7px 0",
            borderRadius: "4px",
            "& svg": {
                fontSize: "14px"
            }
        }
    }
});

export default useStyles;