import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        paddingTop: "2.5em",
        paddingBottom: "3.5em",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    Title: {
        position: "relative",
        fontWeight: theme.typography.medium,
        textTransform: "uppercase",
        width: "max-content",
        margin: "0 auto",
        fontSize: "35px",
        "&:after, &:before": {
            content: '""',
            background: "#0000007a",
            width: "245px",
            height: "1px",
            position: "absolute",
            top: "100%",
            "@media (max-width: 992px)": {
                width: "180px"
            },
            "@media (max-width: 768px)": {
                width: "130px"
            },
            "@media (max-width: 640px)": {
                display: "none"
            }
        },
        "&:after": {
            left: "105%",
            "@media (max-width: 768px)": {
                left: "125%",
            }
        },
        "&:before": {
            right: "105%",
            "@media (max-width: 768px)": {
                right: "125%",
            }
        },
        "&& span": {
            fontWeight: theme.typography.thin,
            fontSize: "35px",
            "@media (max-width: 992px)": {
                fontSize: "29px",
            },
            "@media (max-width: 768px)": {
                fontSize: "22px",
            },
            "@media (max-width: 640px)": {
                fontSize: "20px",
            },
            "@media (max-width: 480px)": {
                fontSize: "18px",
            }
        },
        "@media (max-width: 992px)": {
            fontSize: "29px",
        },
        "@media (max-width: 768px)": {
            fontSize: "22px",
        },
        "@media (max-width: 640px)": {
            fontSize: "20px",
        },
        "@media (max-width: 480px)": {
            fontSize: "18px",
        }
    },
    Description: {
        fontWeight: theme.typography.light,
        fontSize: "15px",
        "@media (max-width: 992px)": {
            fontSize: "14px",
        }
    }
});

export default useStyles;