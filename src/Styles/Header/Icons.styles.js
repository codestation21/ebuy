import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    List: {
        "&& li": {
            display: "inline",
            marginTop: "2px",
            marginBottom: "2px",
            padding: "0",
            "& button": {
                borderRadius: "4px",
                position: "relative",
                "& svg": {
                    fontSize: "32px",
                    padding: "6px",
                    borderRadius: "4px"
                }
            }
        }
    },
    BagItemCount: {
        position: "absolute",
        background: theme.palette.primary.bagItem_count,
        width: "15px",
        height: "15px",
        fontSize: "10px",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "0",
        top: "5px"
    },
    SearchBar: {
        display: "none",
        position: "fixed",
        background: theme.palette.primary.black_opacity,
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        zIndex: 99,
        overflowY: "auto",
        overflowX: "hidden",
        "&.show": {
            display: "block",

        }
    },
    SearchBarArea: {
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translate(-50%)",
        "@media (max-width: 640px)": {
            top: "8%",
        }
    },
    RegisterArea: {
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translate(-50%)",
        width: "35%",
        "@media (max-width: 1200px)": {
            width: "50%"
        },
        "@media (max-width: 992px)": {
            width: "55%"
        },
        "@media (max-width: 768px)": {
            width: "70%"
        },
        "@media (max-width: 640px)": {
            width: "80%"
        },
        "@media (max-width: 640px)": {
            width: "90%"
        }
    },
    CloseBtn: {
        fontSize: "30px !important",
        minWidth: "unset !important",
        padding: "6px 10px !important",
        borderRadius: "6px !important",
        marginTop: "15px !important",
        marginRight: "11px !important",
        color: `${theme.palette.primary.light} !important`,
        "@media (max-width: 640px)": {
            marginTop: "5px !important",
            marginRight: "15px !important",
            padding: "3px 5px !important",
        }
    },
    RegisterClose: {
        position: "absolute",
        top: "-10px",
        right: "-10px",
        "&& button": {
            background: theme.palette.primary.light,
            borderRadius: "50%",
            padding: "6px",
            boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
            "& svg": {
                fontSize: "20px"
            }
        }
    }
});

export default useStyles;