import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Link: {
        textDecoration: "none",
        color: theme.palette.primary.light
    },
    Buttons: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "10px 18px",
        borderRadius: "4px",
        fontWeight: theme.typography.semiBold,
        marginTop: "15px",
        marginBottom: "20px",
        "&& svg": {
            fontSize: "18px",
            marginRight: "10px",
            marginBottom: "-3px"
        }
    },
    CupponContainer: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        padding: "30px 35px",
        borderRadius: "5px",
        marginRight: "2.5em",
        flex: "0 0 50%",
        "@media (max-width: 480px)": {
            flex: "0 0 100%",
        }
    },
    CalculateTextBold: {
        fontSize: "15px",
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.main
    },
    CalculateTextPlain: {
        fontSize: "15px",
        color: theme.palette.primary.gray_secondary,
        marginBottom: "1.5em"
    },
    InputBase: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        borderRadius: "5px",
        padding: "5px 12px",
    },
    UpdateCartButton: {
        flex: 1,
        textAlign: "right",
        "@media (max-width: 480px)": {
            textAlign: "left",
        }
    },
    Select: {
        lineHeight: "0em",
        width: "100%",
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        borderRadius: "5px",
        padding: "0 !important",
        paddingLeft: "5px",
        "&& select": {
            padding: "8px 12px",
            borderRadius: "5px",
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
        }
    }
});

export default useStyles;