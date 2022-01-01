import { useState, useEffect } from "react";
import { Box, List, ListItem, ButtonBase, InputBase, Typography, SvgIcon, InputAdornment } from "@mui/material";

//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Category/FilterWidget.styles";

//Data
import ColorData from "Data/Header/ColorData";

const Color = ({ setFilterData, filterData }) => {
    const [colors, setColors] = useState(ColorData);
    const [input, setInput] = useState("");
    const classes = useStyles();
    const colorHanlder = (item) => {
        let items = new Set(filterData.colors);
        if (!filterData.colors?.has(item)) {
            items.add(item)
        } else {
            items.delete(item)
        }
        setFilterData(prevState => ({ ...prevState, colors: items }));
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
            const mathches = ColorData.filter(item => {
                const escapeRegExp = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.name.match(regex);
            })
            setColors(mathches);
        } else {
            setColors(ColorData);
        }
    }, [input])
    return (
        <Box>
            <Box>
                <InputBase
                    placeholder="Search for Colors"
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
                    {colors &&
                        colors.map((color, i) => (
                            <ListItem key={i}>
                                <ButtonBase
                                    onClick={() => colorHanlder(color.name)}
                                    className={filterData.colors?.has(color.name) ? "selected" : ""}
                                >
                                    <Box
                                        className={classes.colorCode}
                                        sx={{ background: `${color.name.toLowerCase()}` }}
                                    ></Box>
                                    <Typography variant="body1" component="p">
                                        {color.name}
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

export default Color;