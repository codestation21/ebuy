import { Container, Breadcrumbs, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import useStyles from "Styles/Utilis/Breadcrumb.styles";

//Custom Icon
import { ArrowRightIcon, HomeIcon } from "Utilis/Icons";

const Breadcrumb = ({ category, subCategory, title, shop }) => {
    const classes = useStyles();
    return (
        <Container maxWidth={false} disableGutters className={classes.Container}>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<SvgIcon className={classes.Separator}>{ArrowRightIcon}</SvgIcon>}
            >
                <Link href="/">
                    <a className={classes.HomeIcon}>
                        <SvgIcon viewBox="0 0 23 23">{HomeIcon}</SvgIcon>
                        <Typography varient="body1" component="span">
                            Home
                        </Typography>
                    </a>
                </Link>
                {shop &&
                    <Link
                        href="/shop"
                    >
                        <a className={classes.Link}>
                            <Typography varient="body1" component="p">
                                Shop
                            </Typography>
                        </a>
                    </Link>
                }
                {category &&
                    <Link
                        href="/"
                    >
                        <a className={classes.Link}>
                            <Typography varient="body1" component="p">
                                {category}
                            </Typography>
                        </a>
                    </Link>
                }
                {subCategory &&
                    <Link
                        href="/"
                    >
                        <a className={classes.Link}>
                            <Typography varient="body1" component="p">
                                {subCategory}
                            </Typography>
                        </a>
                    </Link>
                }
                <Typography varient="body1" component="p" className={classes.Typography}>
                    {title}
                </Typography>
            </Breadcrumbs>
        </Container>
    );
};
export default Breadcrumb;