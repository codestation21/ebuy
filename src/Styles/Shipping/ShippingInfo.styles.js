import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    StepContainer: {
        width: '100%',
        marginBottom: "1em"
    },
    StepLavel: {
        "&& span": {
            textTransform: "uppercase",
            fontWeight: theme.typography.medium,
            fontSize: "16px",
            "@media (max-width: 480px)": {
                fontSize: "14px"
            },
            "@media (max-width: 360px)": {
                fontSize: "10px"
            }
        }
    }
});

export default useStyles;