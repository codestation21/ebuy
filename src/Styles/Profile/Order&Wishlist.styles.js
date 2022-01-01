import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    TabTitle: {
        marginLeft: "-24px",
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        paddingLeft: "24px",
        paddingBottom: "5px",
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
    ButtonContainer: {
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
            marginRight: "5px",
        },
    },
    CardContainer: {
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        padding: "20px 0",
        marginLeft: "-24px",
        paddingLeft: "24px"
    },
    RemoveItem: {
        padding: "8px",
        borderRadius: "50%",
        "&& svg": {
            fontSize: "20px",
            color: theme.palette.primary.delete_color
        }
    },
    Images: {
        width: "100%",
        borderRadius: "3px"
    },
    ProductInfo: {
        marginLeft: "15px",
        "&& h6": {
            fontWeight: theme.typography.semiBold,
            marginBottom: "2px",
            "@media (max-width: 992px)": {
                fontSize: "16px"
            }
        },
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "16px",
            marginBottom: "5px",
            "@media (max-width: 992px)": {
                fontSize: "14px"
            }
        },
        "&& span": {
            fontSize: "15px",
            fontWeight: theme.typography.light,
            marginRight: "10px",
            "&:last-child": {
                fontSize: "20px",
                fontWeight: theme.typography.semiBold,
            }
        }
    },
    StatusAndDateText: {
        fontSize: "15px",
        color: theme.palette.primary.gray_secondary
    },
    StatusInfo: {
        fontWeight: theme.typography.semiBold,
        color: theme.palette.primary.star_fill,
        "@media (max-width: 992px)": {
            fontSize: "15px"
        }
    },
    DateInfo: {
        fontWeight: theme.typography.semiBold,
        "@media (max-width: 992px)": {
            fontSize: "15px"
        }
    },
    MoreInfoContainer: {
        marginLeft: "-24px",
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        borderTop: `1px solid ${theme.palette.primary.gray_primary}`,
        paddingLeft: "24px",
        paddingBottom: "20px",
        paddingTop: "20px",
        marginTop: "20px"
    },
    MoreInfo: {
        marginLeft: "8px",
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "16px"
        },
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
    MoreDateInfo: {
        flex: 1,
        textAlign: "right",
        "&& p": {
            fontWeight: theme.typography.light,
            fontSize: "15px",
            color: theme.palette.primary.gray_secondary
        },
        "&& h6": {
            fontWeight: theme.typography.semiBold
        }
    },
    ViewLessButton: {
        fontSize: "18px",
        fontFamily: '"Inter"',
        marginTop: "20px",
        padding: "5px 12px",
        borderRadius: "3px"
    },
    BottomTotal: {
        borderBottom: `1px solid ${theme.palette.primary.gray_primary}`,
        marginLeft: "-24px",
        paddingLeft: "24px"
    },
    TotalText: {
        flex: "0 0 18%",
        borderRight: `1px solid ${theme.palette.primary.gray_primary}`,
        "&& h6": {
            padding: "15px 0px",
            fontWeight: theme.typography.semiBold,
            fontSize: "18px"
        }
    },
    TotalPrice: {
        flex: "0 0 12%",
        borderLeft: `1px solid ${theme.palette.primary.gray_primary}`,
        "&& h6": {
            padding: "15px 0px",
            fontWeight: theme.typography.semiBold,
            fontSize: "18px"
        }
    },
    TotalDescription: {
        padding: "15px 0",
        fontWeight: theme.typography.light,
        fontSize: "15px",
        marginLeft: "15px",
        color: theme.palette.primary.gray_secondary
    },
    AddToCartButton: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        padding: "10px 15px",
        borderRadius: "4px",
        fontFamily: '"Inter"',
        fontSize: "15px",
        textTransform: "uppercase",
        fontWeight: theme.typography.semiBold,
        "&& svg": {
            fontSize: "18px",
            marginRight: "8px",
            marginBottom: "2px"
        },
        "@media (max-width: 992px)": {
            fontSize: "12px"
        }
    }
});

export default useStyles;