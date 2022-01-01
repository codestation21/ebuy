import { Box, Stack, Slider } from "@mui/material";

const Price = ({ setFilterData, filterData }) => {
    const handleChange = (event, newValue) => {
        setFilterData(prevState => ({ ...prevState, prices: newValue }));
    };
    return (
        <Box sx={{ width: "100%", mt: "6em" }}>
            <Slider
                getAriaLabel={() => 'Price Range'}
                value={filterData.prices ? filterData.prices : [100, 500]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={1000}
                min={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
            />
            <Stack direction="row">
                <Box>
                    {filterData.prices ? filterData.prices[0] : "100"} tk
                </Box>
                <Box sx={{ flex: 1, textAlign: "right" }}>
                    {filterData.prices ? filterData.prices[1] : "500"} tk
                </Box>
            </Stack>
        </Box>
    );
};
export default Price;

function valuetext(value) {
    return `${value} tk`;
}