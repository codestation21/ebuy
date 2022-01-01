import { makeStyles } from "@mui/styles";
import theme from "Theme";

const useStyles = makeStyles({
    DataTable: {
        "&& .MuiTableCell-root": {
            border: "none"
        },
        "&& .MuiPaper-elevation2": {
            boxShadow: "none",
            borderBottom: `1px solid ${theme.palette.primary.gray_primary}`
        },
        "&& .MuiTableRow-root": {
            "& th:first-child": {
                borderRadius: "6px 0 0 6px"
            },
            "& th:last-child": {
                borderRadius: "0 6px 6px 0"
            }
        }
    },
    ProductTitle: {
        fontSize: "14px",
        fontWeight: theme.typography.semiBold
    },
    ProductImages: {
        width: "70px",
        borderRadius: "4px",
        marginRight: "10px"
    },
    Star: {
        marginTop: "4px",
        "&& span": {
            color: theme.palette.primary.star,
            fontSize: "18px"
        },
        "&& .MuiRating-iconFilled": {
            color: theme.palette.primary.star_fill
        }
    },
    ProductPrice: {
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.gray_secondary,
        fontSize: "18px"
    },
    ProductPriceTotal: {
        fontWeight: theme.typography.medium,
        color: theme.palette.primary.main,
        fontSize: "18px"
    },
    RemoveButton: {
        padding: "10px 11px",
        borderRadius: "5px",
        color: theme.palette.primary.delete_color,
        "&& svg": {
            fontSize: "20px"
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
    }
});

export default useStyles;