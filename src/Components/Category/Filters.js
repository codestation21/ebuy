import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, SvgIcon, ButtonBase } from "@mui/material";

//Custom Icon
import { FilterIcon, toggleIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Category/Filters.styles";

//Components
import FilterWidget from "./Filters/FilterWidget";
import BestSeller from "./Filters/BestSeller";

const Filters = () => {
    const [filter, setFilter] = useState(false);
    const [selller, setSeller] = useState(false);
    //Collecting BestSeller Data
    const [sellerData, setSellerData] = useState("");
    //Collecting Filter Data
    const [filterData, setFilterData] = useState("");
    //BestSeller Function
    const sellerDataHanlder = (item) => {
        setSellerData(item)
        console.log(sellerData);
    }
    //Filter Data function
    const filterDataHandler = () => {
        console.log(filterData);
        setFilter(false);
    }
    const refFilter = useRef();
    const refSeller = useRef();
    const classes = useStyles();
    useOnClickOutside(refFilter, () => setFilter(false));
    useOnClickOutside(refSeller, () => setSeller(false));
    return (
        <Box>
            <Stack direction="row" className={classes.ItemsNumber}>
                <Typography variant="body1" component="h6">
                    Clothings & Apparels
                </Typography>
                <Typography variant="body1" component="p">
                    - 704386 items
                </Typography>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center", mb: "2em", flexWrap: { mds: "unset", xs: "wrap" } }}>
                <Box ref={refFilter} className={classes.FilterContainer}>
                    <ButtonBase onClick={() => setFilter(!filter)} className={classes.Buttons}>
                        <SvgIcon viewBox="0 0 24 24">
                            {FilterIcon}
                        </SvgIcon>
                        Filters
                    </ButtonBase>
                    {filter &&
                        <Box className={classes.FilterWidget}>
                            <FilterWidget
                                setFilterData={setFilterData}
                                filterDataHandler={filterDataHandler}
                                filterData={filterData}
                            />
                        </Box>
                    }
                </Box>
                <Box ref={refSeller} className={classes.SellerContainer}>
                    <ButtonBase onClick={() => setSeller(!selller)} className={classes.Buttons}>
                        <SvgIcon viewBox="0 0 24 21">
                            {toggleIcon}
                        </SvgIcon>
                        BestSellers
                    </ButtonBase>
                    {selller &&
                        <Box className={classes.SellerWidget}>
                            <BestSeller sellerDataHanlder={sellerDataHanlder} />
                        </Box>
                    }
                </Box>
            </Stack>
        </Box >
    );
};
export default Filters;

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}