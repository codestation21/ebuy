import { Box, Stack, Typography, ButtonBase, SvgIcon } from "@mui/material";

//Custom Icon
import { DeleteIcon } from "Utilis/Icons";

//DataTable
import DataTable from "Components/Common/DataTable";

//Styles
import useStyles from "Styles/Shipping/YourOder.styles";

const YourOder = () => {
    const classes = useStyles();
    return (
        <Box>
            <Stack sx={{ mb: "10px" }}>
                <Typography variant="h6" component="h6">
                    Your Order
                </Typography>
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
export default YourOder;