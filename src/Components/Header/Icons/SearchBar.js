import { useState, useEffect, useRef } from "react";
import { Box, TextField, Autocomplete, Stack, List, ListItem, ButtonBase, Typography } from "@mui/material";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
//Styles
import useStyles from "Styles/Header/SearchBar.styles";

//Data
import CategoriesData from "Data/Header/SearchBar.data";

const SearchBar = ({ Search }) => {
    const [input, setInput] = useState("");
    const [categories, setCategories] = useState("All Categories");
    const [showCate, setShowCate] = useState(false);
    const classes = useStyles();
    const ref = useRef();

    const categoryHandler = (name) => {
        setCategories(name);
        setShowCate(false);
    }
    useOnClickOutside(ref, () => setShowCate(false));
    useEffect(() => {
        if (!Search) {
            setCategories("All Categories")
        }
    }, [Search])
    return (
        <Stack direction="row" className={classes.Container}>
            <Box ref={ref}>
                <ButtonBase
                    direction="row"
                    className={classes.CategoryInput}
                    onClick={() => setShowCate(true)}
                >
                    <Typography variant="body1" component="p" className={classes.CategoryInputTex}>
                        {categories}
                    </Typography>
                    <ArrowDropDownRoundedIcon />
                </ButtonBase>
                <Box className={`${classes.SelectContainer} ${showCate ? "visible" : ""}`}>
                    <List className={classes.List}>
                        {CategoriesData &&
                            CategoriesData.map((category, i) => (
                                <Box key={i}>
                                    <ListItem>
                                        <ButtonBase onClick={() => categoryHandler(category.name)}>
                                            <Typography variant="body1" component="p">
                                                {category.name}
                                            </Typography>
                                        </ButtonBase>
                                    </ListItem>
                                    {category.sub &&
                                        category.sub.map((subCategory, i) => (
                                            <ListItem key={i}>
                                                <ButtonBase onClick={() => categoryHandler(subCategory.name)}>
                                                    <Typography variant="body1" component="p" className={classes.ListSubCate}>
                                                        {subCategory.name}
                                                    </Typography>
                                                </ButtonBase>
                                            </ListItem>
                                        ))
                                    }
                                </Box>
                            ))
                        }
                    </List>
                </Box>
            </Box>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={SearchData}
                className={classes.AutoComplete}
                freeSolo
                onChange={(event, value) => console.log(value)}
                renderInput={(params) => <TextField {...params} placeholder="Search for item....." />}
            />
        </Stack>
    );
};
export default SearchBar;

const SearchData = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]
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