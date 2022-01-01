import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        display: "block",
        boxShadow: `-10px 10px 25px ${theme.palette.primary.product_box_shadow}`,
        borderRadius: "8px",
        position: "relative",
        transition: "0.4s cubic-bezier(0.545, 0, 0.05, 1)",
        "&:hover": {
            boxShadow: `-10px 10px 25px ${theme.palette.primary.product_box_shadow_hover}`,
        }
    },
    Images: {
        height: "290px",
        width: "100%",
        objectFit: "cover",
        objectPosition: "top center",
        borderRadius: "5px",
    },
    Titlte: {
        fontSize: "19px",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    Description: {
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden",
        marginBottom: "12px",
        fontWeight: "light",
        fontSize: "15px",
        width: "75%"
    },
    Star: {
        marginTop: "4px",
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "20px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
    Buttons: {
        textAlign: "right",
        flex: 1,
        "&& button": {
            marginLeft: "4px",
            padding: "6px",
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
            borderRadius: "4px",
            "& svg": {
                fontSize: "18px",
            },
            "@media (max-width: 1200px)": {
                marginBottom: "5px"
            }
        }
    },
    PriceBox: {
        position: "absolute",
        right: "0",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "3px 13px",
        top: "54%",
        borderRadius: "4px 0 0 4px",
        h6: {
            fontWeight: theme.palette.medium,
            fontSize: "18px"
        },
        "@media screen and (max-width: 1200px) and (min-width: 993px)": {
            top: "50%",
        }
    }
});

export default useStyles;