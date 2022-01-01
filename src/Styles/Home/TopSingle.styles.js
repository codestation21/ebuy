import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Title: {
        fontSize: "20px",
        paddingBottom: "10px",
        marginBottom: "20px",
        borderBottom: `1px solid ${theme.palette.primary.border_bottom}`,
        position: "relative",
        fontWeight: theme.typography.medium,
        "&:after": {
            content: '""',
            position: "absolute",
            width: "25%",
            background: theme.palette.primary.main,
            height: "2px",
            left: "0",
            bottom: "0"
        }
    },
    Link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
        display: "block",
        padding: "10px 10px 5px 10px",
        height: "100%",
        borderRadius: "5px",
        transition: "0.2s ease",
        "&:hover": {
            background: theme.palette.primary.top_hover_bg
        }
    },
    Images: {
        width: "100%",
        height: "100%",
        borderRadius: "5px"
    },
    ProductTitle: {
        fontSize: "18px",
        fontWeight: theme.typography.medium,
        mb: "3px"
    },
    Star: {
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "22px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
    RatingPoint: {
        marginLeft: "2px",
        color: theme.palette.primary.main_tartiary,
        marginTop: "-2px"
    },
    OriginalPrice: {
        fontSize: "17px",
        color: theme.palette.primary.main_tartiary,
        textDecoration: "line-through"
    }
});

export default useStyles;