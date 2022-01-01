import { useState } from "react"
import { Box, Grid, Tab, ButtonBase, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

//styles
import useStyles from "Styles/Category/FilterWidget.styles";

//Compoents
import Categories from './FilterWidget/Categories';
import Brand from './FilterWidget/Brand';
import Price from './FilterWidget/Price';
import Color from './FilterWidget/Color';
import Discount from './FilterWidget/Discount';

//Data
const TabLabel = ["Categories", "Brand", "Price", "Color", "Discounted Range"];

const FilterWidget = ({ setFilterData, filterDataHandler, filterData }) => {
    const [value, setValue] = useState('1');
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value} className="asfkjshdf">
            <Grid container spacing={2}>
                <Grid item lg={2.2} sm={4} sms={3} xs={4}>
                    <Box>
                        <Typography variant="h5" component="h5" className={classes.Titlte}>
                            Filters
                        </Typography>
                        <TabList
                            onChange={handleChange}
                            orientation="vertical"
                            aria-label="lab API tabs example"
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                }
                            }}
                        >
                            {TabLabel &&
                                TabLabel.map((label, i) => (
                                    <Tab
                                        key={i}
                                        label={label}
                                        value={(i + 1).toString()}
                                        className={classes.TabButton}
                                    />
                                ))

                            }
                        </TabList>
                    </Box>
                </Grid>
                <Grid item lg={9.8} sm={8} sms={9} xs={8} sx={{ position: "relative", pt: "0px !important" }}>
                    <Box>
                        <ButtonBase className={classes.ApplyButton} onClick={filterDataHandler}>
                            Apply
                        </ButtonBase>
                    </Box>
                    <Box>
                        <TabPanel value="1" sx={{ px: { sm: "24px", xs: "0px" } }}>
                            <Categories
                                setFilterData={setFilterData}
                                filterData={filterData}
                            />
                        </TabPanel>
                        <TabPanel value="2" sx={{ pb: "0px", px: { sm: "24px", xs: "0px" } }}>
                            <Brand
                                setFilterData={setFilterData}
                                filterData={filterData}
                            />
                        </TabPanel>
                        <TabPanel value="3" sx={{ px: { sm: "24px", xs: "0px" } }}>
                            <Price
                                setFilterData={setFilterData}
                                filterData={filterData}
                            />
                        </TabPanel>
                        <TabPanel value="4" sx={{ px: { sm: "24px", xs: "0px" } }}>
                            <Color
                                setFilterData={setFilterData}
                                filterData={filterData}
                            />
                        </TabPanel>
                        <TabPanel value="5" sx={{ px: { sm: "24px", xs: "0px" } }}>
                            <Discount
                                setFilterData={setFilterData}
                                filterData={filterData}
                            />
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </TabContext>
    );
};
export default FilterWidget;