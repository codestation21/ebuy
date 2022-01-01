import { forwardRef } from "react";
import { Box, SvgIcon, Typography, ButtonBase } from "@mui/material";
import { ArrowDownward } from '@mui/icons-material';
import MaterialTable, { Column } from "@material-table/core";

//Custom Icon
import { DeleteIcon } from "Utilis/Icons";

//styles
import useStyles from "Styles/Profile/ReturnOrder.styles";

//theme
import theme from "Theme";

const DataTable = ({ products, setSuggestion, setReturnItem }) => {
    const RevomeHanlder = (item) => {
        var index = products.findIndex(each => each.id == item.id);
        setSuggestion(oldArray => [...oldArray, products[index]]);
        products.splice(index, 1);
        setReturnItem(products);
    }
    const data = [];
    const classes = useStyles();
    products && products.forEach(product => {
        data.push({
            id:
                <Typography variant="body1" component="p" className={classes.TableInfos}>
                    {product.id}
                </Typography>,
            title:
                <Box className={classes.ProductInfos}>
                    <Typography variant="h6" component="h6">
                        {product.product.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        By: The Cotton House
                    </Typography>
                </Box>,
            quantity:
                <Typography variant="body1" component="p" className={classes.TableInfos}>
                    {product.count}
                </Typography>,
            action:
                <ButtonBase onClick={() => RevomeHanlder(product)} className={classes.RemoveIcon}>
                    <SvgIcon viewBox="0 0 24 24">{DeleteIcon}</SvgIcon>
                </ButtonBase>
        })
    })
    const columns = [
        { title: 'Product No.', field: 'id', cellStyle: { width: "20%" } },
        { title: 'Title', field: 'title', cellStyle: { width: "60%" } },
        { title: 'Quantity', field: 'quantity', cellStyle: { width: "10%" } },
        { title: 'Remove', field: 'action', cellStyle: { width: "10%" } }
    ];
    return (
        <Box className={classes.DataTable} sx={{ width: { sm: "unset", xs: "35em" } }}>
            <MaterialTable
                columns={columns}
                data={data}
                options={{
                    search: false,
                    showTitle: false,
                    toolbar: false,
                    paging: false,
                    headerStyle: {
                        backgroundColor: theme.palette.primary.input_bg,
                        color: theme.palette.primary.main,
                    }
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: (
                            <Typography variant="body1" component="p">
                                Your Return List is Empty!
                            </Typography>
                        ),
                    },
                }}
                onSelectionChange={(e) => console.log(e)}
            />
        </Box>
    );
};
export default DataTable;