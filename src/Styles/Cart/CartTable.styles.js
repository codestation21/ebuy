import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TableContainer: {
        background: theme.palette.primary.light,
        marginTop: "5.2em",
        borderRadius: "6px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        padding: "18px 20px"
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
    ProceedButton: {
        fontFamily: '"Inter"',
        fontSize: "16px",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        width: "100%",
        padding: "12px 0",
        borderRadius: "4px",
        fontWeight: theme.typography.semiBold,
        marginTop: "15px",
        "&& a": {
            textDecoration: "none",
            color: theme.palette.primary.light,
            "& svg": {
                fontSize: "18px",
                marginLeft: "20px",
                marginBottom: "-3px"
            }
        }
    }
});

export default useStyles;