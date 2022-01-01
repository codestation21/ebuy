import { makeStyles } from "@mui/styles";
import theme from "Theme";

//Background Imagge
import BackSubscribe from "Assets/Subsribe.png"

const useStyles = makeStyles({
    SubscribeContainer: {
        background: `url('${BackSubscribe}')`,
        backgroundPosition: "top left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "8px",
        marginTop: "4.5em",
        marginBottom: "4.5em"
    },
    SubTitle: {
        color: theme.palette.primary.light,
        fontWeight: theme.typography.semiBold,
        fontSize: "43px",
        lineHeight: 1.2,
        marginBottom: "25px",
        "@media (max-width: 640px)": {
            fontSize: "30px",
        },
        "@media (max-width: 480px)": {
            fontSize: "25px",
        }
    },
    SubDescription: {
        color: theme.palette.primary.light,
        fontSize: "20px",
        marginBottom: "30px"
    },
    InputField: {
        background: theme.palette.primary.light,
        padding: "8px 20px",
        borderRadius: "6px"
    },
    PlaneIcon: {
        color: theme.palette.primary.plane,
        "@media (max-width: 480px)": {
            "&& svg": {
                fontSize: "20px"
            }
        },
        "@media (max-width: 360px)": {
            "&& svg": {
                fontSize: "18px"
            }
        }
    },
    SubmitButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.light,
        marginLeft: "-15px",
        paddingLeft: "15px",
        paddingRight: "15px",
        fontFamily: "Inter",
        textTransform: "capitalize",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: theme.typography.medium,
        "@media (max-width: 480px)": {
            fontSize: "14px",
        },
        "@media (max-width: 360px)": {
            fontSize: "12px",
        }
    }
});

export default useStyles;