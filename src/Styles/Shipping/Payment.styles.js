import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    PaymentCard: {
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        height: "80px",
        borderRadius: "10px",
        padding: "10px 15px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&.selected": {
            background: theme.palette.primary.black_opacity_secondary
        }
    },
    smallImages: {
        width: "35px",
        marginRight: "10px"
    },
    Text: {
        fontSize: "16px",
        color: theme.palette.primary.gray_secondary
    },
    CheckBoxText: {
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.gray_secondary
    }
});

export default useStyles;