import { makeStyles } from "@mui/styles";
import theme from "Theme";

//Background Image
import Background from "Assets/category.png"

const useStyles = makeStyles({
    Container: {
        background: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: "center",
        padding: "3em 2.2em",
        borderRadius: "10px",
        marginBottom: "2em",
        "@media (max-width: 992px)": {
            flexWrap: "wrap"
        }
    },
    CategoryName: {
        fontSize: "25px",
        fontWeight: theme.typography.semiBold,
        marginBottom: "12px"
    },
    Link: {
        textDecoration: "none",
        color: theme.palette.primary.main_quaternary,
        fontSize: "15px"
    },
    HomeIcon: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        "&& svg": {
            fontSize: "16px",
            marginBottom: "-2px"
        },
        "&& span": {
            fontWeight: theme.typography.bold,
            marginLeft: "8px",
            fontSize: "15px"
        }
    },
    Separator: {
        fontSize: "8px !important",
        marginBottom: "-4px"
    },
    Typography: {
        color: theme.palette.primary.main_quaternary,
        fontSize: "15px"
    },
    ChipContainer: {
        flex: 1,
        justifyContent: "right",
        "@media (max-width: 992px)": {
            flex: "0 0 100%",
            marginTop: "20px",
            flexWrap: "wrap"
        }
    }
});

export default useStyles;
