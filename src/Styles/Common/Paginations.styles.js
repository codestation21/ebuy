import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    Paginatiom: {
        marginTop: "3em",
        "&& ul": {
            justifyContent: "center",
            "& li": {
                "& button": {
                    padding: "15px 15px",
                    height: "0",
                },
                "&:first-child": {
                    "& button": {
                        background: theme.palette.primary.main,
                        padding: "15px 10px",
                        color: theme.palette.primary.light,
                        "& svg": {
                            width: "24px",
                            height: "24px"
                        },
                        "&:after": {
                            content: '"Prev"',
                            paddingLeft: "5px",
                            fontSize: "15px",
                            textTransform: "uppercase"
                        }
                    }
                },
                "&:last-child": {
                    "& button": {
                        background: theme.palette.primary.main,
                        padding: "15px 10px",
                        color: theme.palette.primary.light,
                        "& svg": {
                            width: "24px",
                            height: "24px"
                        },
                        "&:before": {
                            content: '"Next"',
                            paddingRight: "5px",
                            fontSize: "15px",
                            textTransform: "uppercase"
                        }
                    }
                },
                "@media (max-width: 640px)": {
                    marginBottom: "10px"
                }
            }
        }
    }
});

export default useStyles;