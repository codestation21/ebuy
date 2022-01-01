import { useState, useEffect } from "react";
import { Box, List, ListItem, ButtonBase, Typography, InputBase, InputAdornment, SvgIcon } from "@mui/material";

//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Category/FilterWidget.styles";

//Data
import CategoriesData from "Data/Header/Subcategories.data";

const Categories = ({ setFilterData, filterData }) => {
    const [categories, setCategories] = useState(CategoriesData);
    const [input, setInput] = useState("");
    const classes = useStyles();
    const categoriesHanlder = (item) => {
        let items = new Set(filterData.categories);
        if (!filterData.categories?.has(item)) {
            items.add(item)
        } else {
            items.delete(item)
        }
        setFilterData(prevState => ({ ...prevState, categories: items }))
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
            const mathches = CategoriesData.filter(item => {
                const escapeRegExp = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.name.match(regex);
            })
            setCategories(mathches);
        } else {
            setCategories(CategoriesData);
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
                    {categories &&
                        categories.map((category, i) => (
                            <ListItem key={i}>
                                <ButtonBase
                                    onClick={() => categoriesHanlder(category.name)}
                                    className={filterData.categories?.has(category.name) ? "selected" : ""}
                                >
                                    <Typography variant="body1" component="p">
                                        {category.name}
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

export default Categories;