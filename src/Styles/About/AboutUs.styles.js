import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Title: {
        fontWeight: theme.typography.medium,
        fontSize: "22px"
    },
    Description: {
        fontWeight: theme.typography.light,
        marginTop: "10px",
        marginBottom: "25px",
        color: theme.palette.primary.gray_secondary
    },
    CarouselImages: {
        width: "100%",
        height: "90%",
        objectFit: "cover",
        objectPosition: "top"
    },
    Arrows: {
        "&& button": {
            position: "absolute",
            top: "45%",
            transform: "translateY(-50%)",
            background: theme.palette.primary.main,
            width: "32px",
            height: "32px",
            display: "flex",
            borderRadius: "50%",
            color: theme.palette.primary.light,
            justifyContent: "center",
            alignItems: "center",
            "& svg": {
                fontSize: "15px"
            },
            "&.arrow--left": {
                left: "-15px"
            },
            "&.arrow--right": {
                right: "-15px"
            }
        }
    },
    LeftImage: {
        width: "100%",
        height: "97.5%",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "12px"
    }
});
export default useStyles;