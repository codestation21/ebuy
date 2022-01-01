import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    PictureLabel: {
        position: "relative",
        width: "max-content",
        cursor: "pointer"
    },
    AddIcon: {
        position: "absolute",
        bottom: "0",
        right: "0",
        background: theme.palette.primary.main,
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: theme.palette.primary.light
    },
    TitleText: {
        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "18px"
    },
    InputField: {
        width: "100%",
        padding: "2px 15px",
        borderRadius: "5px",
        background: theme.palette.primary.input_bg
    },
    ShowOrHidePassword: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        "&& p": {
            textTransform: "uppercase",
            fontSize: "13px"
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
    }
});

export default useStyles;