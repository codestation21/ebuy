import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Container: {
        background: theme.palette.primary.input_bg,
        padding: "1.5em",
        borderRadius: "15px",
        marginBottom: "3em"
    },
    SinceText: {
        fontSize: "14px",
        fontWeight: theme.typography.light
    },
    Title: {
        fontWeight: theme.typography.bold,
        fontSize: "22px",
        marginTop: "5px",
        marginBottom: "5px",
    },
    Star: {
        marginTop: "2px",
        marginRight: "3px",
        marginBottom: "10px",
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "20px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
    Points: {
        color: theme.palette.primary.gray_secondary
    },
    AddressAndCell: {
        fontWeight: theme.typography.regular,
        color: theme.palette.primary.gray_secondary,
        fontSize: "15px",
        marginBottom: "5px",
        "&& span": {
            fontWeight: theme.typography.light,
            fontSize: "15px",
        }
    },
    FollowusText: {
        fontWeight: theme.typography.semiBold
    },
    List: {
        padding: "0",
        margin: "10px 0",
        "&& li": {
            display: "inline",
            padding: "0",
            margin: "0 2px",
            "& button": {
                padding: "5px",
                borderRadius: "5px",
                color: theme.palette.primary.main,
                "& svg": {
                    fontSize: "22px"
                }
            }
        }
    },
    ContactButton: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        fontWeight: theme.typography.semiBold,
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "8px 18px",
        borderRadius: "5px",
        "&& svg": {
            fontSize: "18px",
            marginLeft: "10px"
        }
    }
});

export default useStyles;