import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        background: theme.palette.primary.light,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: "8px"
    },
    AutoComplete: {
        width: "50em",
        "&& input": {
            padding: "0 !important",
            margin: "0",
            "&:hover": {
                borderColor: "transparent !important"
            }
        },
        "&& .MuiOutlinedInput-notchedOutline": {
            border: "none !important",
            borderRadius: "0",
            "&:hover": {
                borderColor: "transparent !important",
                outline: "none !important"
            },
            "&:after": {
                background: theme.palette.primary.black_opacity_secondary,
                position: "absolute",
                width: "1px",
                left: "0",
                content: '""',
                zIndex: 9999,
                top: "-5px",
                height: "100%"
            }
        },
        "@media (max-width: 1200px)": {
            width: "40em"
        },
        "@media (max-width: 992px)": {
            width: "30em"
        },
        "@media (max-width: 768px)": {
            width: "22em"
        },
        "@media (max-width: 640px)": {
            width: "18em",
        },
        "@media (max-width: 480px)": {
            width: "10em",
        },
        "@media (max-width: 360px)": {
            width: "7em",
        }
    },
    SelectContainer: {
        position: "absolute",
        background: theme.palette.primary.black_opacity_quaternary,
        top: "100%",
        width: "100%",
        borderRadius: "5px",
        left: "0",
        padding: "0 10px !important",
        visibility: "hidden",
        opacity: "0",
        "&.visible": {
            visibility: "visible",
            opacity: "1",
        }
    },
    CategoryInput: {
        padding: "9px 10px !important",
        borderRadius: "5px 0 0 5px",
        cursor: "pointer",
        width: "12em",
        textAlign: "left"
    },
    CategoryInputTex: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "clip",
        width: "100%"
    },
    List: {
        columnCount: 4,
        background: theme.palette.primary.column_color2,
        "&& li": {
            padding: "2px 0",
            margin: "0",
            "& button": {
                textAlign: "left",
                padding: "2px 8px",
                borderRadius: "3px",
                "& p": {
                    fontSize: "16px",
                    fontWeight: 600,
                    color: theme.palette.primary.main_primary
                }
            }
        },
        "@media (max-width: 768px)": {
            columnCount: 2,
        }
    },
    ListSubCate: {
        fontWeight: "400 !important",
        fontSize: "15px !important",
        color: `${theme.palette.primary.black_opacity_tartiary} !important`
    },
    SelectArrowIcon: {
        width: "20%",
        height: "100%",
        cursor: "pointer",
        "&& svg": {
            fontSize: "25px"
        }
    }
});

export default useStyles;