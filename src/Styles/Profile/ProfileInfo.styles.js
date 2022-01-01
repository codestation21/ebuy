import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Sticky: {
        position: "sticky",
        top: "35px",
        height: "max-content",
        "@media (max-width: 1200px)": {
            position: "unset",
        }
    },
    PageTitlte: {
        fontSize: "30px",
        textTransform: "uppercase",
        fontWeight: theme.typography.bold,
        marginBottom: "1em",
        marginTop: "15px"
    },
    TabButton: {
        padding: "14px 15px",
        margin: "0",
        minHeight: "0",
        justifyContent: "left",
        fontSize: "16px",
        textTransform: "capitalize",
        borderBottom: `1px solid ${theme.palette.primary.black_opacity_secondary}`,
        color: theme.palette.primary.gray_secondary,
        "&& svg": {
            marginLeft: "auto"
        },
        "&.Mui-selected": {
            background: theme.palette.primary.profile_tab
        }
    },
    LogoutButton: {
        marginTop: "10px",
        padding: "5px 15px",
        justifyContent: "left",
        "&& h6": {
            fontSize: "16px",
            fontWeight: theme.typography.semiBold,
            color: theme.palette.primary.delete_color
        }
    }
});

export default useStyles;