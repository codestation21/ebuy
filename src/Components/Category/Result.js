import { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";

//styles
import useStyles from "Styles/Category/Result.styles";

//Paginations
import Paginations from "Components/Common/Paginations";

//Products
import Products from "Components/Common/Products";

const Result = () => {
    const [page, setPage] = useState(1);
    const classes = useStyles();
    const productInfo = {
        count: 20,
        limit: 10
    }
    const pageNumber = Math.ceil(productInfo.count / productInfo.limit);
    return (
        <Box>
            <Products />
            {pageNumber > 1 &&
                <Paginations
                    setPage={setPage}
                    count={pageNumber}
                />
            }
            <Box>
                <Typography variant="body1" component="p" className={pageNumber > 1 ? classes.PageInfo : classes.PageInfoSpaces}>
                    Pgae {page} of {pageNumber}
                </Typography>
            </Box>
        </Box>
    );
};
export default Result;