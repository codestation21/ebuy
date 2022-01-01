import { Box, Stack, Chip, Typography, Breadcrumbs, SvgIcon } from "@mui/material";
import { withStyles } from "@mui/styles";
import Link from "next/link";

//Styles
import useStyles from "Styles/Category/FilterChip.styles";

//theme
import theme from "Theme";

//Custom Icon
import { ArrowRightIcon, HomeIcon, CloseIcon } from "Utilis/Icons";

const FilterChip = () => {
    const handleDelete = (value) => {
        console.info(value);
    };
    const classes = useStyles();
    const chips = ["Top Wear", "T-Shirts", "Wallets", "Shirts", "Dessses", "Siam"]
    return (
        <Stack direction="row" className={classes.Container}>
            <Box sx={{ flex: { md: "unset", xs: "100%" } }}>
                <Typography variant="h5" component="h5" className={classes.CategoryName}>
                    Men&apos;s
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
                    <Link
                        href="/"
                    >
                        <a className={classes.Link}>
                            <Typography varient="body1" component="p">
                                Shop
                            </Typography>
                        </a>
                    </Link>
                    <Typography varient="body1" component="p" className={classes.Typography}>
                        Search
                    </Typography>
                </Breadcrumbs>
            </Box>
            <Stack direction="row" spacing={1} className={classes.ChipContainer}>
                {chips &&
                    chips.map((chip, i) => (
                        <StyledChip
                            key={i}
                            label={chip}
                            onDelete={() => handleDelete(chip)}
                            deleteIcon={<SvgIcon viewBox="0 0 24 24">
                                {CloseIcon}
                            </SvgIcon>}
                            sx={{ mb: { lg: "0px !important", xs: "10px !important" } }}
                        />
                    ))
                }
            </Stack>
        </Stack>
    );
};
export default FilterChip;

const StyledChip = withStyles({
    root: {
        position: "relative",
        background: theme.palette.primary.light,
        borderRadius: "3px",
        padding: "20px 0",
        paddingLeft: "20px",
        paddingRight: "5px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        color: theme.palette.primary.main,
        fontSize: "14px"
    },
    deleteIcon: {
        left: "15px",
        position: "absolute",
        fontSize: "22px !important",
        color: `${theme.palette.primary.main} !important`,
        top: "50%",
        transform: "translateY(-50%)",
        padding: "6px"
    }
})(Chip);