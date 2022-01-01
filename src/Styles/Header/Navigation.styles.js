import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    List: {
        "&& li": {
            display: "inline",
            marginLeft: "10px",
            marginRight: "10px",
            padding: "0",
            "& button": {
                fontFamily: "Inter",
                borderRadius: "4px",
                "& a": {
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontWeight: theme.typography.regular,
                    fontSize: "15px",
                    padding: "5px 10px",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                }
            }
        },
        "@media (max-width: 992px)": {
            display: "none"
        }
    },
    MobileBar: {
        padding: "3px 5px",
        borderRadius: "3px",
        display: "none",
        "@media (max-width: 992px)": {
            display: "block",
            margin: "0 auto"
        },
        "@media (max-width: 360px)": {
            padding: "2px 3px",
        }
    },
    Drawer: {
        zIndex: "9999999999999",
        "&& .MuiPaper-root": {
            width: "300px",
            padding: "15px",
            "@media (max-width: 480px)": {
                width: "250px",
            }
        }
    },
    CloseIcon: {
        position: "absolute",
        top: "-10px",
        right: "-2px",
        padding: "3px 5px",
        borderRadius: "3px"
    },
    MobileMenu: {
        "&& li": {
            padding: "0",
            margin: "8px 0px",
            "& button": {
                fontFamily: "Inter",
                borderRadius: "4px",
                "& a": {
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontWeight: theme.typography.regular,
                    fontSize: "15px",
                    padding: "5px 10px",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                }
            }
        }
    },
    SocilContainer: {
        padding: "0 22px",
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "20px"
    },
    Social: {
        margin: "0",
        padding: "0",
        "&& li": {
            display: "inline",
            marginRight: "10px",
            padding: "0",
            "& a": {
                "& svg": {
                    color: theme.palette.primary.main,
                    fontSize: "20px"
                }
            }
        }
    }
});

export default useStyles;