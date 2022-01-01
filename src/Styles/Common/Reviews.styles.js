import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ReviewBox: {
        marginBottom: "1.5em",
        padding: "15px 20px",
        borderRadius: "15px",
        border: `1px solid ${theme.palette.primary.gray_primary}`
    },
    ImageBox: {
        textAlign: "center",
        marginRight: "12px",
        "&& img": {
            width: "95px",
            height: "95px",
            objectFit: "cover",
            borderRadius: "50%"
        },
        "&& p": {
            color: theme.palette.primary.gray_secondary,
            fontWeight: theme.typography.medium,
            fontSize: "16px"
        },
        "@media (max-width: 480px)": {
            flex: "0 0 100%"
        }
    },
    Star: {
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "20px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
    Date: {
        fontSize: "16px",
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary
    },
    Comments: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary
    }
});

export default useStyles;