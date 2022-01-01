import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    CartHeader: {
        "&& h4": {
            fontWeight: theme.typography.semiBold,
            fontSize: "35px",
            color: theme.palette.primary.main,
            marginBottom: "5px"
        },
        "&& p": {
            fontSize: "16px",
            color: theme.palette.primary.gray_secondary,
            "& span": {
                fontWeight: theme.typography.semiBold,
                color: theme.palette.primary.main
            }
        }
    },
    ButtonContainer: {
        flex: 1,
        textAlign: "right"
    },
    Button: {
        color: theme.palette.primary.delete_color,
        fontSize: "16px",
        fontFamily: '"Inter"',
        padding: "6px 10px",
        borderRadius: "4px",
        "&& svg": {
            fontSize: "20px",
            marginRight: "3px",
        }
    }
});

export default useStyles;