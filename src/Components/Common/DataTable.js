import { forwardRef } from "react";
import { Box, Stack, SvgIcon, Typography, ButtonBase, InputBase, Rating } from "@mui/material";
import { Star, ArrowDownward } from '@mui/icons-material';
import MaterialTable from "@material-table/core";

//Custom Icon
import { DeleteIcon, ArrowUp, ArrowDown } from "Utilis/Icons";

//Theme
import theme from "Theme";

//Styles
import useStyles from "Styles/Common/DataTable.styles";

//Data
import cartData from "Data/Cart.data";

const DataTable = () => {
    const classes = useStyles();
    const data = [];
    cartData && cartData.forEach(cart => {
        data.push({
            product: <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box>
                    <Box component="img" className={classes.ProductImages} src={cart.product.images[0].url} alt="Product Image" />
                </Box>
                <Box>
                    <Typography className={classes.ProductTitle} variant="h6" component="h6">
                        {cart.product.name}
                    </Typography>
                    <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={4}
                        readOnly
                        className={classes.Star}
                        emptyIcon={<Star fontSize="inherit" />}
                    />
                </Box>
            </Stack>,
            price: <Typography className={classes.ProductPrice} variant="h6" component="h6">
                ${cart.product.price}
            </Typography>,
            quantity: <Box sx={{ position: "relative" }} className="sdfjshfggb">
                <InputBase
                    className={classes.InputField}
                    value={cart.count}
                    type="text"
                />
                <Box className={classes.CounterButton}>
                    <ButtonBase>
                        <SvgIcon viewBox="0 0 23 13">
                            {ArrowUp}
                        </SvgIcon>
                    </ButtonBase>
                    <ButtonBase>
                        <SvgIcon viewBox="0 0 23 13">
                            {ArrowDown}
                        </SvgIcon>
                    </ButtonBase>
                </Box>
            </Box>,
            subtotal:
                <Typography variant="h6" component="h6" className={classes.ProductPriceTotal}>
                    ${cart.product.price * cart.count}
                </Typography>,
            action:
                <ButtonBase className={classes.RemoveButton} >
                    <SvgIcon viewBox="0 0 24 24">{DeleteIcon}</SvgIcon>
                </ButtonBase >
        })
    })
    const columns = [
        { title: 'Product', field: 'product', cellStyle: { width: "75%" } },
        { title: 'Price', field: 'price', cellStyle: { width: "5%" } },
        { title: 'Quantity', field: 'quantity', cellStyle: { width: "10%" } },
        { title: 'Subtotal', field: 'subtotal', cellStyle: { width: "5%" } },
        { title: 'Remove', field: 'action', cellStyle: { width: "5%" } }
    ];
    return (
        <Box className={classes.DataTable}>
            <MaterialTable
                columns={columns}
                data={data}
                options={{
                    search: false,
                    showTitle: false,
                    toolbar: false,
                    selection: true,
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
                                Cart is Empty!
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