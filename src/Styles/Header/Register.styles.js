import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    RegisterContainer: {
        background: theme.palette.primary.light,
        borderRadius: "8px",
        padding: "20px 25px",
        textAlign: "left",
        marginTop: "5px",
        marginBottom: "22px"
    },
    TermsText: {
        textAlign: "center",
        fontSize: "15px",
        color: theme.palette.primary.main_secondary
    },
    FormLabel: {
        fontSize: "16px",
        marginBottom: "5px",
        marginLeft: "2px",
        color: theme.palette.primary.main
    },
    FormInput: {
        width: "100%",
        borderRadius: "4px",
        padding: "3px 10px",
        border: `1px solid ${theme.palette.primary.black_opacity_secondary}`
    },
    SubmitButton: {
        background: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.light} !important`,
        width: "100% !important",
        marginTop: "20px !important",
        padding: "10px 0 !important",
        borderRadius: "3px !important",
        "&& p": {
            fontSize: "16px",
            fontWeight: theme.typography.semiBold
        }
    },
    OrText: {
        textAlign: "center",
        position: "relative",
        marginBottom: "10px",
        "&& p": {
            fontSize: "16px",
            background: theme.palette.primary.light,
            width: "max-content",
            margin: "0 auto",
            padding: "0 8px",
            position: "relative",
            zIndex: 9
        },
        "&:after": {
            content: '""',
            background: theme.palette.primary.main,
            width: "100%",
            height: "1px",
            position: "absolute",
            left: "0",
            top: "12px"
        }
    },
    FacebookLogin: {
        background: `${theme.palette.primary.facebook} !important`,
        width: "100% !important",
        color: `${theme.palette.primary.light} !important`,
        fontFamily: '"Inter"',
        fontSize: "15px !important",
        fontWeight: `${theme.typography.medium} !important`,
        padding: "10px 0 !important",
        borderRadius: "4px !important",
        marginBottom: "10px !important",
        "&& svg": {
            fontSize: "20px",
            marginRight: "10px"
        }
    },
    GoogleLogin: {
        width: "100% !important",
        fontSize: "15px !important",
        fontWeight: `${theme.typography.medium} !important`,
        fontFamily: '"Inter"',
        padding: "8px 0 !important",
        borderRadius: "4px !important",
        "&& svg": {
            fontSize: "18px",
            marginRight: "10px"
        }
    },
    BottomText: {
        textAlign: "center",
        fontSize: "16px",
        marginTop: "10px",
        fontWeight: theme.typography.medium,
        "&& span": {
            fontWeight: theme.typography.semiBold,
            cursor: "pointer",
            textDecoration: "underline"
        }
    },
    EyIcon: {
        position: "absolute",
        right: "0",
        top: "55%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        "&& svg": {
            fontSize: "20px",
            color: theme.palette.primary.eyeIcon
        },
        "&.visible": {
            "& svg": {
                color: theme.palette.primary.main
            }
        }
    },
    ForgetPassword: {
        flex: 1,
        textAlign: "right",
        cursor: "pointer",
        "&& p": {
            fontSize: "16px",
            textDecoration: "underline",
        }
    }
});

export default useStyles;