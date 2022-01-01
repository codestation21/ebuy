import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    InputField: {
        width: "100%",
        padding: "2px 15px",
        borderRadius: "5px",
        background: theme.palette.primary.input_bg
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
    AdditionalInfo: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary,
        margin: "15px 0",
        "&& svg": {
            fontSize: "20px",
            marginBottom: "-4px",
            marginLeft: "12px",
            marginRight: "5px"
        }
    },
    RadioButtonHeading: {
        fontSize: "18px",
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.gray_secondary,
        marginBottom: "3px"
    },
    RadioButtonText: {
        fontSize: "16px",
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary,
    }
});

export default useStyles;