import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Titlte: {
        fontSize: "18px",
        textTransform: "uppercase",
        fontWeight: theme.typography.semiBold,
        marginBottom: "1em",
        marginTop: "20px"
    },
    TabButton: {
        padding: "8px 10px",
        margin: "0",
        minHeight: "0",
        borderRadius: "3px",
        textAlign: "left",
        alignItems: "start",
        fontSize: "16px",
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        "&.Mui-selected": {
            background: theme.palette.primary.profile_tab
        },
        "@media (max-width: 640px)": {
            fontSize: "14px",
        },
        "@media (max-width: 360px)": {
            fontSize: "10px",
        }
    },
    SearchBase: {
        background: theme.palette.primary.light,
        width: "65%",
        borderRadius: "5px",
        padding: "2px 10px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow_secondary}`,
        marginBottom: "1.5em",
        "@media (max-width: 640px)": {
            fontSize: "15px",
        },
        "@media (max-width: 480px)": {
            marginTop: "20px",
            width: "100%",
        }
    },
    ApplyButton: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "6px 15px",
        borderRadius: "5px",
        fontWeight: theme.typography.medium,
        textTransform: "uppercase",
        position: "absolute",
        right: "25px",
        top: "27px",
        zIndex: "99",
        "@media (max-width: 640px)": {
            right: "15px",
            top: "22px",
        },
        "@media (max-width: 480px)": {
            right: "2px",
            top: "2px",
        }
    },
    AutoScroll: {
        maxHeight: "20em",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        paddingRight: "5px",
        "&::-webkit-scrollbar": {
            width: "8px"
        },
        "&::-webkit-scrollbar-track": {
            background: theme.palette.primary.light,
            borderRadius: "30px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#C1C1C1",
            borderRadius: "30px",
        }
    },
    List: {
        columnCount: 5,
        background: theme.palette.primary.column_color,
        padding: "5px 8px",
        width: "100%",
        "&& li": {
            padding: "2px 0",
            margin: "0",
            display: "table",
            breakInside: "avoid-column",
            pageBreakInside: "avoid",
            "& button": {
                width: "100%",
                textAlign: "left",
                justifyContent: "left",
                padding: "2px 8px",
                borderRadius: "3px",
                "& p": {
                    fontSize: "15px",
                    fontWeight: theme.typography.medium,
                    color: theme.palette.primary.main_primary
                },
                "&.selected": {
                    background: theme.palette.primary.profile_tab
                }
            }
        },
        "@media (max-width: 1200px)": {
            columnCount: 4,
            background: "linear-gradient(to right, white 0 25%, transparent 25% 50%, white 50% 75%, transparent 75% 100%)"
        },
        "@media (max-width: 992px)": {
            columnCount: 2,
            background: "linear-gradient(to right, white 0 50%, transparent 50% 100%)"
        },
        "@media (max-width: 480px)": {
            columnCount: 1,
            background: "linear-gradient(to right, white 0 100%)"
        }
    },
    ListSubCate: {
        fontWeight: "400 !important",
        fontSize: "14px !important",
        color: `${theme.palette.primary.black_opacity_tartiary} !important`
    },
    colorCode: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        marginRight: "8px"
    }
});

export default useStyles;