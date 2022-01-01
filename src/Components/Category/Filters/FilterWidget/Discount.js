import { Box, Stack, Slider } from "@mui/material";

const Dicount = ({ setFilterData, filterData }) => {
    const handleChange = (event, newValue) => {
        setFilterData(prevState => ({ ...prevState, discounts: newValue }));
    };
    return (
        <Box sx={{ width: "100%", mt: "6em" }}>
            <Slider
                getAriaLabel={() => 'Price Range'}
                value={filterData.discounts ? filterData.discounts : [20, 30]}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={100}
                min={0}
                step={10}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
            />
            <Stack direction="row">
                <Box>
                    {filterData.discounts ? filterData.discounts[0] : "20"}%
                </Box>
                <Box sx={{ flex: 1, textAlign: "right" }}>
                    {filterData.discounts ? filterData.discounts[1] : "30"}%
                </Box>
            </Stack>
        </Box>
    );
};
export default Dicount;

function valuetext(value) {
    return `${value}%`;
}