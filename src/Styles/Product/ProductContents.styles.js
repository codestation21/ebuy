import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    ProductTitle: {
        fontSize: "30px",
        fontWeight: theme.typography.semiBold,
        marginBottom: "25px",
        "@media (max-width: 480px)": {
            fontSize: "20px",
        }
    },
    MainPrice: {
        fontSize: "60px",
        fontWeight: theme.typography.medium,
        "@media (max-width: 480px)": {
            fontSize: "50px",
        }
    },
    DiscountPrice: {
        fontSize: "16px",
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.star_fill
    },
    OriginalPrice: {
        fontSize: "30px",
        letterSpacing: "1px",
        color: theme.palette.primary.main_quaternary,
        textDecoration: "line-through",
        fontWeight: theme.typography.light,
        "@media (max-width: 480px)": {
            fontSize: "25px",
        }
    },
    ShortDescription: {
        marginTop: "12px",
        marginBottom: "12px",
        color: theme.palette.primary.main_quaternary,
        WebkitLineClamp: "3",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
    },
    SizeAndColorstitle: {
        fontSize: "16px",
        marginRight: "15px",
        color: theme.palette.primary.main_quaternary,
        marginRight: "35px",
        "@media (max-width: 480px)": {
            fontSize: "14px",
        }
    },
    RadioButton: {
        position: "relative",
        "&& span:first-child": {
            border: "1px solid transparent",
            width: "100%",
            height: "100%",
            padding: "18px 25px",
            borderRadius: "3px",
            "& input": {
                display: "none"
            },
            "& span": {
                display: "none"
            },
            "&.Mui-checked": {
                background: theme.palette.primary.light,
                boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
                borderColor: theme.palette.primary.black_opacity
            },
            "@media (max-width: 480px)": {
                padding: "14px 15px",
            }
        },
        "&& span:last-child": {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
        }
    },
    ColorButton: {
        marginRight: "25px",
        "&& span:first-child": {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            padding: "10px",
            position: "relative",
            "&::after": {
                content: '""',
                position: "absolute",
                borderRadius: "50%",
                left: "-3px",
                top: "-3px",
                zIndex: -1,
                right: "-3px",
                bottom: "-3px",
                border: "1px solid transparent"
            },
            "& input": {
                display: "none"
            },
            "& span": {
                display: "none"
            },
            "&.Mui-checked": {
                "&::after": {
                    borderColor: theme.palette.primary.main
                }
            }
        },
        "&& span:last-child": {
            display: "none"
        }
    },
    InputField: {
        "&& input": {
            padding: "8px 22px",
            borderRadius: "4px",
            border: `1px solid ${theme.palette.primary.main}`,
            fontSize: "18px",
        }
    },
    CounterButton: {
        position: "absolute",
        right: "7px",
        top: "1px",
        "&& button": {
            display: "block",
            margin: "2px 0",
            padding: "1px 5px",
            borderRadius: "2px",
            "& svg": {
                fontSize: "12px"
            }
        }
    },
    SubmitButton: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "0 20px",
        fontSize: "14px",
        marginLeft: "10px",
        borderRadius: "3px",
        fontFamily: '"Inter"',
        textTransform: "uppercase",
        fontWeight: theme.typography.semiBold,
        "&& svg": {
            fontSize: "18px",
            marginRight: "10px",
            marginBottom: "3px"
        },
        "@media (max-width: 480px)": {
            flex: "0 0 100%",
            marginLeft: "0px",
            marginBottom: "15px",
            marginTop: "15px",
            padding: "12px 0"
        }
    },
    LoveAndDownBtn: {
        marginLeft: "10px",
        padding: "0 12px",
        borderRadius: "4px",
        border: `1px solid ${theme.palette.primary.gray_primary}`,
        "&& svg": {
            color: theme.palette.primary.gray_primary,
            fontSize: "22px"
        },
        "@media (max-width: 480px)": {
            flex: "0 0 100%",
            marginLeft: "0px",
            marginBottom: "15px",
            padding: "12px 0"
        }
    },
    Star: {
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "20px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
});

export default useStyles;