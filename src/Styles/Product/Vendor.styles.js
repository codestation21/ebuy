import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Name: {
        fontSize: "25px",
        fontWeight: theme.typography.bold,
        marginBottom: "5px"
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
    SellerContactInfo: {
        alignItems: "center",
        margin: "10px 0",
        "&& svg": {
            fontSize: "20px",
            marginRight: "10px",
            color: theme.palette.primary.gray_secondary
        },
        "&& p": {
            fontSize: "16px",
            fontWeight: theme.typography.extraLight,
            color: theme.palette.primary.gray_secondary
        }
    },
    SuccessBox: {
        marginRight: "5em",
        "&& h3": {
            color: theme.palette.primary.main,
            "@media (max-width: 768px)": {
                fontSize: "35px"
            }
        },
        "&& p": {
            fontSize: "20px",
            fontWeight: theme.typography.light,
            color: theme.palette.primary.gray_secondary,
            "@media (max-width: 768px)": {
                fontSize: "18px"
            }
        },
        "@media (max-width: 480px)": {
            flex: "0 0 100%",
            marginBottom: "10px"
        }
    },
    Details: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary,
        fontWeight: theme.typography.regular
    }
});

export default useStyles;