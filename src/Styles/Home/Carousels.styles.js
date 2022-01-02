import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        boxShadow: "0 12px 60px -20px #09090938",
    },
    Link: {
        width: "100%",
        display: "block",
        height: "100%",
        position: "relative",
        "&& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top"
        },
    },
    DotBtnContainer: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "2%",
        "&& button": {
            background: theme.palette.primary.dot_button,
            width: "10px",
            height: "10px",
            margin: "0 3px",
            border: "none",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
            transition: "0.3s ease-in-out",
            "&.active": {
                background: theme.palette.primary.light,
                width: "30px",
                height: "10px",
                borderRadius: "8px"
            }
        }
    },
    ArrowLeft: {
        position: "absolute",
        top: "50%",
        left: "0.5%",
        cursor: "pointer",
        transition: "0.2s ease",
        "&& svg": {
            fontSize: "22px",
            transition: "0.2s ease",
            "@media (max-width: 640px)": {
                fontSize: "18px",
            }
        },
        "&:hover": {
            left: "0%",
            svg: {
                fontSize: "24px",
                "@media (max-width: 640px)": {
                    fontSize: "20px",
                }
            },
        }
    },
    ArrowRight: {
        position: "absolute",
        top: "50%",
        right: "0.5%",
        cursor: "pointer",
        transition: "0.2s ease",
        "&& svg": {
            fontSize: "22px",
            transition: "0.2s ease",
            "@media (max-width: 640px)": {
                fontSize: "18px",
            }
        },
        "&:hover": {
            right: "0%",
            svg: {
                fontSize: "24px",
                "@media (max-width: 640px)": {
                    fontSize: "20px",
                }
            },
            "@media (max-width: 640px)": {
                right: "1.5%",
            }
        },
        "@media (max-width: 640px)": {
            right: "2%",
        }
    }
});

export default useStyles;