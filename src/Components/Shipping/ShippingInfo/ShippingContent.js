import { Box } from "@mui/material";

//Components
import Address from "./ShippingContent/Address";
import Payment from "./ShippingContent/Payment";
import YourOrder from "./ShippingContent/YourOder";

const ShippingContent = ({ activeStep, register }) => {
    return (
        <Box sx={{ mt: "20px" }}>
            {activeStep === 0 &&
                <YourOrder />
            }
            {activeStep === 1 &&
                <Address register={register} />
            }
            {activeStep === 2 &&
                <Payment register={register} />
            }
        </Box>
    );
};
export default ShippingContent;