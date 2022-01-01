import { useState } from "react";
import { Box } from "@mui/material";

//Products
import Products from "Components/Common/Products";

//Pagnations
import Paginations from "Components/Common/Paginations";

const VendorProducts = () => {
    const [page, setPage] = useState(1)
    return (
        <Box>
            <Products />
            <Paginations
                count={4}
                setPage={setPage}
            />
        </Box>
    );
};
export default VendorProducts;