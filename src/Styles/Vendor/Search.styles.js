import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    VendorList: {
        textAlign: "center",
        marginBottom: "20px",
        "&& h4": {
            fontWeight: theme.typography.semiBold
        }
    },
    SearchBar: {
        background: theme.palette.primary.light,
        marginTop: "20px",
        width: "40%",
        padding: "4px 15px",
        borderRadius: "15px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        fontSize: "16px",
        "@media (max-width: 768px)": {
            width: "60%",
        },
        "@media (max-width: 480px)": {
            width: "100%",
        }
    },
    VendorInfoText: {
        "&& p": {
            fontWeight: theme.typography.light,
            color: theme.palette.primary.gray_secondary,
            "& span": {
                fontWeight: theme.typography.medium,
                color: theme.palette.primary.main
            }
        },
        "@media (max-width: 640px)": {
            flex: "0 0 100%",
            marginBottom: "5px"
        }
    },
    SelectText: {
        fontWeight: theme.typography.light
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
        }
    }
});

export default useStyles;