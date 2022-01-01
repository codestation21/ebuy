import { Box, Stack, Typography, Breadcrumbs, SvgIcon } from "@mui/material";
import Link from "next/link";

//Styles
import useStyles from "Styles/Category/FilterChip.styles";

//Custom Icon
import { ArrowRightIcon, HomeIcon } from "Utilis/Icons";

const NewsChip = () => {
    const classes = useStyles();
    return (
        <Stack direction="row" className={classes.Container}>
            <Box>
                <Typography variant="h5" component="h5" className={classes.CategoryName}>
                    News & Blog
                </Typography>
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
                    <Typography varient="body1" component="p" className={classes.Typography}>
                        News & Blog
                    </Typography>
                </Breadcrumbs>
            </Box>
        </Stack>
    );
};
export default NewsChip;