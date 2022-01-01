import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    FilterContainer: {
        width: "70%",
        margin: "0 auto",
        marginTop: "3em",
        marginBottom: "3em",
        alignItems: "center",
        "@media (max-width: 768px)": {
            width: "90%"
        }
    },
    NewsInfoText: {
        fontSize: "18px",
        fontWeight: theme.typography.semiBold,
        "&& svg": {
            marginBottom: "-5px",
            marginRight: "1px"
        },
        "@media (max-width: 360px)": {
            fontSize: "15px"
        }
    },
    SelectText: {
        fontWeight: theme.typography.light,
        "@media (max-width: 480px)": {
            fontSize: "15px"
        },
        "@media (max-width: 360px)": {
            fontSize: "12px"
        }
    },
    Select: {
        lineHeight: "0em",
        width: "100%",
        borderRadius: "5px",
        padding: "0 !important",
        paddingLeft: "5px",
        "&& select": {
            padding: "8px 12px",
            borderRadius: "5px",
            fontWeight: theme.typography.light,
            "&:focus": {
                background: "transparent"
            }
        },
        "&& .MuiSelect-select": {
            minHeight: "0em !important"
        },
        "&:before": {
            border: "none",
        },
        "&:after": {
            border: "none",
        },
        "&:hover": {
            "&:before": {
                border: "none !important",
            },
        },
        "& svg": {
            display: "none"
        },
        "@media (max-width: 480px)": {
            fontSize: "15px"
        },
        "@media (max-width: 360px)": {
            fontSize: "12px"
        }
    }
});

export default useStyles;