import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    HeaderTitle: {
        fontSize: "24px",
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.gray_tertiary
    },
    Title: {
        fontSize: "50px",
        fontWeight: theme.typography.medium,
        marginBottom: "20px",
        marginTop: "10px",
        "@media (max-width: 480px)": {
            fontSize: "30px",
        }
    },
    Description: {
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary
    },
    Images: {
        width: "100%",
        borderRadius: "10px"
    },
    TeamContent: {
        position: "absolute",
        background: theme.palette.primary.light,
        width: "82%",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-55px",
        padding: "30px 40px",
        borderRadius: "15px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        textAlign: "center",
        "@media (max-width: 1200px)": {
            width: "90%",
            padding: "10px 20px",
        }
    },
    Name: {
        fontWeight: theme.typography.medium,
        fontSize: "20px"
    },
    Post: {
        fontWeight: theme.typography.light,
        fontSize: "16px"
    },
    List: {
        padding: "0",
        marginTop: "8px",
        "&& li": {
            display: "inline",
            padding: "0",
            "& a": {
                color: theme.palette.primary.main,
                "& button": {
                    margin: "0 2px",
                    padding: "5px",
                    borderRadius: "3px",
                    "& svg": {
                        fontSize: "18px",
                    }
                }
            }
        }
    }
});

export default useStyles;