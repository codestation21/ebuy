import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    CardContainer: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        borderRadius: "10px",
        padding: "25px",
        alignItems: "center",
        position: "relative",
        "@media (max-width: 480px)": {
            flexWrap: "wrap"
        }
    },
    ProductCounts: {
        background: theme.palette.primary.gray_tertiary,
        textAlign: "center",
        padding: "10px 0",
        borderRadius: "8px",
        marginTop: "8px",
        fontSize: "13px"
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
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.gray_secondary,
        fontSize: "15px",
        marginBottom: "5px",
        "&& span": {
            fontWeight: theme.typography.light,
            fontSize: "15px",
        }
    },
    ViewButton: {
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
        },
    },
    Badge: {
        position: "absolute",
        top: "0",
        right: "0",
        padding: "5px 15px",
        borderRadius: "0 10px 0 10px",
        color: theme.palette.primary.light,
        fontWeight: theme.typography.medium
    }
});

export default useStyles;