import { useState, useEffect } from "react";
import { Box, List, ListItem, ButtonBase, InputBase, Typography, SvgIcon, InputAdornment } from "@mui/material";

//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Category/FilterWidget.styles";

//Data
import BrandData from "Data/Header/Brand.Data";

const Brand = ({ setFilterData, filterData }) => {
    const [brands, setBrands] = useState(BrandData);
    const [input, setInput] = useState("")
    const classes = useStyles();
    const brandHandler = (item) => {
        let items = new Set(filterData.brands);
        if (!filterData.brands?.has(item)) {
            items.add(item)
        } else {
            items.delete(item)
        }
        setFilterData(prevState => ({ ...prevState, brands: items }));
    }
    const onMouseEnter = () => {
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollBarWidth}px`;
        header.style.paddingRight = `${24 + scrollBarWidth}px`;
    }
    const onMouseLeave = () => {
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        body.style.overflow = "unset";
        body.style.paddingRight = "0px";
        header.style.paddingRight = "24px";
    }
    useEffect(() => {
        if (input.length > 0) {
            const mathches = BrandData.filter(item => {
                const escapeRegExp = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.name.match(regex);
            })
            setBrands(mathches);
        } else {
            setBrands(BrandData);
        }
    }, [input])
    return (
        <Box>
            <Box>
                <InputBase
                    placeholder="Search for Brands"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon viewBox="0 0 21 24" sx={{ fontSize: "18px" }}>
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    className={classes.SearchBase}
                />
            </Box>
            <Box className={classes.AutoScroll} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <List className={classes.List}>
                    {brands &&
                        brands.map((brand, i) => (
                            <ListItem key={i}>
                                <ButtonBase
                                    onClick={() => brandHandler(brand.name)}
                                    className={filterData.brands?.has(brand.name) ? "selected" : ""}
                                >
                                    <Typography variant="body1" component="p">
                                        {brand.name}
                                    </Typography>
                                </ButtonBase>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Box>
    );
};
export default Brand;