import { useState, useEffect, useRef } from "react";
import { Box, List, ListItem, ButtonBase, Button, SvgIcon, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
//Custome Icon
import { SearchIcon, ProfileIcon, LoveIcon, BagIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Header/Icons.styles";

//Components--SearchBar
import SearchBar from "./Icons/SearchBar";
//Components--Register
import Register from "./Icons/Register";

const Icons = () => {
    const [Search, setSearch] = useState(false);
    const [registerPop, setRegisterPop] = useState(false);
    const classes = useStyles();
    const ref = useRef();
    const openSearch = () => {
        setSearch(true);
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollBarWidth}px`;
        header.style.paddingRight = `${24 + scrollBarWidth}px`;
    }
    const openRegister = () => {
        setRegisterPop(true);
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollBarWidth}px`;
        header.style.paddingRight = `${24 + scrollBarWidth}px`;
    }
    const closeRegister = () => {
        setRegisterPop(false);
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        body.style.overflow = "unset";
        body.style.paddingRight = "0px";
        header.style.paddingRight = "24px";
    }
    const closeSearch = () => {
        setSearch(false);
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        body.style.overflow = "unset";
        body.style.paddingRight = "0px";
        header.style.paddingRight = "24px";
    }
    useOnClickOutside(ref, () => {
        setRegisterPop(false);
        const body = document.querySelector('body');
        const header = document.querySelector('.mui-header');
        if (!Search) {
            body.style.overflow = "unset";
            body.style.paddingRight = "0px";
            header.style.paddingRight = "24px";
        }
    });
    return (
        <Box component="nav" sx={{ textAlign: "right" }}>
            <List className={classes.List}>
                <ListItem>
                    <ButtonBase onClick={openSearch}>
                        <SvgIcon viewBox="0 0 21 24">
                            {SearchIcon}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase onClick={openRegister}>
                        <SvgIcon viewBox="0 0 16 24">
                            {ProfileIcon}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase sx={{ a: { textDecoration: "none", color: "#222529", mt: "3px" } }}>
                        <Link href="/user/profile/id">
                            <a>
                                <SvgIcon >
                                    {LoveIcon}
                                </SvgIcon>
                            </a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase sx={{ a: { textDecoration: "none", color: "#222529", mt: "3px" } }}>
                        <Link href="/cart/index">
                            <a>
                                <SvgIcon viewBox="0 0 16 23">
                                    {BagIcon}
                                </SvgIcon>
                                <Typography variant="body1" component="div" className={classes.BagItemCount}>
                                    5
                                </Typography>
                            </a>
                        </Link>
                    </ButtonBase>
                </ListItem>
            </List>
            <Box className={`${classes.SearchBar} ${Search ? "show" : ""}`}>
                <Box className={classes.SearchBarArea}>
                    <SearchBar Search={Search} />
                </Box>
                <Box>
                    <Button onClick={closeSearch} className={classes.CloseBtn}>
                        <CloseIcon />
                    </Button>
                </Box>
            </Box>
            <Box className={`${classes.SearchBar} ${registerPop ? "show" : ""}`}>
                <Box className={classes.RegisterArea}>
                    <Box ref={ref} sx={{ width: "100%", margin: "0 auto" }}>
                        <Register registerPop={registerPop} />
                        <Box className={classes.RegisterClose}>
                            <ButtonBase onClick={closeRegister}>
                                <CloseIcon />
                            </ButtonBase>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Icons;

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