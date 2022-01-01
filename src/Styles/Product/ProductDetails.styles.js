import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    DetailContainer: {
        width: '100%',
        typography: 'body1',
        border: `1px solid ${theme.palette.primary.product_detail_border}`,
        marginTop: "2.5em",
        padding: "1.8em",
        borderRadius: "12px"
    },
    TabButton: {
        border: `1px solid ${theme.palette.primary.product_detail_border}`,
        padding: "0 25px",
        marginRight: "10px",
        borderRadius: "8px",
        textTransform: "capitalize",
        fontSize: "16px",
        margin: "10px",
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.gray_secondary,
        transition: "0.2s ease",
        "&&.Mui-selected": {
            color: theme.palette.primary.main,
            borderColor: "transparent",
            background: "white",
            boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        }
    }
});

export default useStyles;