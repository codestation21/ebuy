import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Title: {
        fontSize: "20px",
        fontWeight: theme.typography.semiBold,
        marginBottom: "20px"
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
    RattingPointText: {
        fontSize: "16px",
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.gray_secondary,
        marginLeft: "20px"
    },
    ProgressText: {
        fontWeight: theme.typography.light,
        color: theme.palette.primary.gray_secondary,
        marginRight: "12px"
    },
    ProgressBar: {
        height: "25px",
        borderRadius: "4px",
        "&& span": {
            borderRadius: "4px",
        }
    },
    ProgressLabel: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
        color: theme.palette.primary.light,
        fontWeight: theme.typography.light,
        fontSize: "15px"
    },
    BottomLinkedText: {
        textDecoration: "none",
        color: theme.palette.primary.gray_secondary,
        fontSize: "16px",
        fontWeight: theme.typography.medium,
        marginTop: "2.5em",
        display: "block"
    }
});

export default useStyles;