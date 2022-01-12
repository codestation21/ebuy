import { useState } from "react";
import { Box, List, ListItem, ButtonBase, SvgIcon, Drawer } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, YouTube, Instagram, Close } from "@mui/icons-material";

//Icons
import { MenuBar } from "Utilis/Icons";

//Logo Image
import LogoImage from "Assets/Logo.png"

//Styles
import useStyles from "Styles/Header/Navigation.styles";

const Navigation = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <Box component="nav" sx={{ textAlign: "center" }}>
            <List className={classes.List}>
                <ListItem>
                    <ButtonBase>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase>
                        <Link href="/about-ebuy">
                            <a>About</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase>
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase>
                        <Link href="/vendors/index">
                            <a>Vendors</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase>
                        <Link href="/ebuy-news">
                            <a>Blog</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
                <ListItem>
                    <ButtonBase>
                        <Link href="/contact-ebuy">
                            <a>Contact</a>
                        </Link>
                    </ButtonBase>
                </ListItem>
            </List>
            <ButtonBase className={classes.MobileBar} onClick={toggleDrawer(true)}>
                <SvgIcon>
                    {MenuBar}
                </SvgIcon>
            </ButtonBase>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                className={classes.Drawer}
            >
                <Box sx={{ mt: "5px", mb: "25px", ml: "3px", position: "relative" }}>
                    <Link href="/">
                        <a><Image src={LogoImage} width={108} height={40.8} alt="Logo" /></a>
                    </Link>
                    <ButtonBase onClick={toggleDrawer(false)} className={classes.CloseIcon}>
                        <Close />
                    </ButtonBase>
                </Box>
                <List className={classes.MobileMenu}>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/about-ebuy">
                                <a>About</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/shop">
                                <a>Shop</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/vendors/index">
                                <a>Vendors</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/ebuy-news">
                                <a>Blog</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                    <ListItem>
                        <ButtonBase>
                            <Link href="/contact-ebuy">
                                <a>Contact</a>
                            </Link>
                        </ButtonBase>
                    </ListItem>
                </List>
                <Box className={classes.SocilContainer}>
                    <List className={classes.Social}>
                        <ListItem>
                            <Link href="/">
                                <a><Facebook /></a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/">
                                <a><Twitter /></a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/">
                                <a><YouTube /></a>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="/">
                                <a><Instagram /></a>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
export default Navigation;