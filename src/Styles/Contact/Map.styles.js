import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    MapContainer: {
        height: '45vh',
        width: '100%',
        marginBottom: "2em",
        "&& div": {
            borderRadius: "10px"
        }
    },
    Address: {
        "&& h6": {
            fontSize: "22px",
            fontWeight: theme.typography.semiBold
        },
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "17px"
        },
        "&& button": {
            background: theme.palette.primary.main,
            fontFamily: '"Inter"',
            padding: "10px 20px",
            fontSize: "15px",
            color: theme.palette.primary.light,
            borderRadius: "5px",
            fontWeight: theme.typography.semiBold,
            marginTop: "10px"
        }
    }
});

export default useStyles;