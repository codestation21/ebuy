import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TabTitle: {
        marginLeft: "-24px",
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        paddingLeft: "24px",
        paddingBottom: "20px",
        marginBottom: "2em",
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
    SearchBar: {
        background: theme.palette.primary.input_bg,
        width: "60%",
        padding: "2px 10px",
        borderRadius: "5px",
        marginBottom: "25px"
    },
    SearchIcon: {
        "&& svg": {
            fontSize: "18px"
        }
    },
    Images: {
        width: "100%",
        borderRadius: "4px"
    },
    ProductInfos: {
        marginLeft: "20px",
        "&& h6": {
            fontWeight: theme.typography.semiBold,
            marginBottom: "2px",
            "@media (max-width: 992px)": {
                fontSize: "15px",
            }
        },
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "15px"
        }
    },
    SizeInfo: {
        fontSize: "15px",
        fontWeight: theme.typography.medium
    },
    AddReturnButton: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "10px 15px",
        borderRadius: "4px",
        marginTop: "2em",
        "&& p": {
            fontSize: "15px",
            fontWeight: theme.typography.semiBold,
            textTransform: "uppercase",
            "@media (max-width: 992px)": {
                fontSize: "12px",
            }
        },
        "@media (max-width: 992px)": {
            padding: "5px 8px",
        }
    },
    TableInfos: {
        fontSize: "16px",
        fontWeight: theme.typography.medium
    },
    RemoveIcon: {
        padding: "10px",
        borderRadius: "50%",
        "&& svg": {
            fontSize: "20px",
            color: theme.palette.primary.delete_color
        }
    },
    DataTable: {
        marginBottom: "1em",
        "&& .MuiTableCell-root": {
            border: "none"
        },
        "&& .MuiPaper-elevation2": {
            boxShadow: "none",
            borderBottom: `1px solid ${theme.palette.primary.gray_primary}`
        },
        "&& .MuiTableRow-root": {
            "& th:first-child": {
                borderRadius: "6px 0 0 6px"
            },
            "& th:last-child": {
                borderRadius: "0 6px 6px 0"
            }
        }
    },
    Select: {
        lineHeight: "0em",
        width: "100%",
        borderRadius: "5px",
        padding: "0 !important",
        background: theme.palette.primary.input_bg,
        paddingLeft: "5px",
        marginBottom: "15px",
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
    },
    TextArea: {
        background: theme.palette.primary.input_bg,
        width: "100%",
        borderRadius: "5px",
        padding: "5px 15px"
    },
    File: {
        background: theme.palette.primary.input_bg,
        padding: "5px 15px",
        textAlign: "center",
        borderRadius: "5px",
        cursor: "pointer",
    }
});

export default useStyles;