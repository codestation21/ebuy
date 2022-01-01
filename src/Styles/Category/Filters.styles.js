import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ItemsNumber: {
        alignItems: "center",
        marginBottom: "20px",
        color: theme.palette.primary.gray_secondary,
        "&& h6": {
            fontSize: "17px",
            fontWeight: theme.typography.semiBold
        },
        "&& p": {
            fontSize: "17px",
            marginLeft: "5px"
        }
    },
    FilterContainer: {
        position: "relative",
        flex: "0 0 85%",
        "@media (max-width: 992px)": {
            flex: "0 0 80%",
        },
        "@media (max-width: 768px)": {
            flex: "0 0 100%",
        }
    },
    SellerContainer: {
        flex: "0 0 15%",
        textAlign: "right",
        position: "relative",
        "@media (max-width: 992px)": {
            flex: "0 0 20%",
        },
        "@media (max-width: 768px)": {
            flex: "0 0 100%",
        }
    },
    Buttons: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        fontWeight: theme.typography.light,
        padding: "6px 15px",
        borderRadius: "3px",
        textTransform: "uppercase",
        "&& svg": {
            fontSize: "15px",
            marginRight: "6px",
            marginBottom: "-1px"
        }
    },
    FilterWidget: {
        background: theme.palette.primary.black_opacity_quaternary,
        position: "absolute",
        zIndex: 9,
        width: "100%",
        left: "0",
        padding: "12px",
        borderRadius: "10px",
        top: "110%",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
    },
    SellerWidget: {
        position: "absolute",
        background: theme.palette.primary.light,
        right: "0",
        zIndex: 9,
        top: "110%",
        width: "90%",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        borderRadius: "10px"
    }
});

export default useStyles;