import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

//Styles
import useStyles from "Styles/Product/ProductDetails.styles";

//Components
import Description from "./ProductDetails/Description";
import AdditionalInfo from "./ProductDetails/AdditionalInfo";
import Vendor from "./ProductDetails/Vendor";
import Reviews from "./ProductDetails/Reviews";

const ProductDetails = () => {
    const [value, setValue] = useState('1');
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className={classes.DetailContainer}>
            <TabContext value={value}>
                <Box>
                    <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            }
                        }}
                    >
                        <Tab label="Description" value="1" className={classes.TabButton} />
                        <Tab label="Additional Info" value="2" className={classes.TabButton} />
                        <Tab label="Vendor" value="3" className={classes.TabButton} />
                        <Tab label={`Reviews(3)`} value="4" className={classes.TabButton} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Description />
                </TabPanel>
                <TabPanel value="2">
                    <AdditionalInfo />
                </TabPanel>
                <TabPanel value="3">
                    <Vendor />
                </TabPanel>
                <TabPanel value="4">
                    <Reviews />
                </TabPanel>
            </TabContext >
        </Box >
    );
};
export default ProductDetails;