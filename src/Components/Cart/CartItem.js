import { Box, Stack, Typography, ButtonBase, SvgIcon } from "@mui/material";

//Custom Icon
import { DeleteIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Cart/CartItem.styles";

//Components
import DataTable from "../Common/DataTable";

const CartItem = () => {
    const classes = useStyles();
    return (
        <Box>
            <Stack direction="row" sx={{ mb: "2em", alignItems: "end" }}>
                <Box className={classes.CartHeader}>
                    <Typography variant="h4" component="h4">
                        Your cart
                    </Typography>
                    <Typography variant="body1" component="p">
                        There are {" "}
                        <Typography variant="body1" component="span">
                            {3}
                        </Typography>
                        {" "}products in your cart
                    </Typography>
                </Box>
                <Box className={classes.ButtonContainer}>
                    <ButtonBase className={classes.Button}>
                        <SvgIcon viewBox="0 0 24 24">
                            {DeleteIcon}
                        </SvgIcon>
                        Clear Cart
                    </ButtonBase>
                </Box>
            </Stack>
            <DataTable />
        </Box>
    );
};
export default CartItem;