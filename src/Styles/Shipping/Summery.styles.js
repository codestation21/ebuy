import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    SummeryContainer: {
        background: theme.palette.primary.light,
        marginTop: "1.5em",
        borderRadius: "6px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        padding: "18px 20px",
        "@media (max-width: 1200px)": {
            marginTop: "2.5em",
        }
    },
    List: {
        "&& li": {
            margin: "0",
            padding: "0",
            marginBottom: "15px",
            paddingBottom: "10px",
            "& p": {
                textAlign: "right",
                flex: 1,
                fontWeight: theme.typography.semiBold,
                color: theme.palette.primary.main
            },
            "& h6": {
                fontSize: "15px",
                fontWeight: theme.typography.semiBold,
                color: theme.palette.primary.gray_primary
            },
            "&:last-child": {
                marginBottom: "0",
                paddingBottom: "0",
            },
            "&:first-child, &:nth-child(3)": {
                borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
            }
        }
    },
    NextButtons: {
        marginTop: "10px",
        "&& button": {
            background: theme.palette.primary.main,
            color: theme.palette.primary.light,
            width: "100%",
            fontFamily: '"Inter"',
            padding: "10px 0",
            fontSize: "16px",
            fontWeight: theme.typography.semiBold,
            margin: " ",
            borderRadius: "5px"
        }
    },
    BackButton: {
        marginTop: "10px",
        "&& button": {
            width: "100%",
            padding: "10px 0",
            borderRadius: "5px",
            border: `1px solid ${theme.palette.primary.gray_primary}`,
            fontSize: "15px",
            fontWeight: theme.typography.semiBold,
            color: theme.palette.primary.gray_secondary
        }
    }
});

export default useStyles;