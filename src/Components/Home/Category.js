import { Box, Grid } from "@mui/material";
import Link from "next/link"

//SectionHeader
import SectionHeader from "Utilis/SectionHeader";

//Styles
import useStyles from "Styles/Home/Category.styles";

//Images
import Category1 from "Assets/backend/category1.jpg";
import Category2 from "Assets/backend/category2.jpg";
import Category3 from "Assets/backend/category3.jpg";
import Category4 from "Assets/backend/category4.jpg";
import Category5 from "Assets/backend/category5.jpg";

const Category = () => {
    const classes = useStyles();
    return (
        <Box>
            <SectionHeader
                title="Categories"
                description="Find product in easy way"
            />
            <Box sx={{ mb: 1 }}>
                <Grid container spacing={1}>
                    <Grid item sm={6.5} xs={12}>
                        <Link href="/">
                            <a className={classes.ImageContainer}>
                                <Box component="img" className={classes.Images} src={Category1} alt="Category" />
                            </a>
                        </Link>
                    </Grid>
                    <Grid item sm={2.75} xs={12}>
                        <Link href="/">
                            <a className={classes.ImageContainer}>
                                <Box component="img" className={classes.Images} src={Category2} alt="Category" />
                            </a>
                        </Link>
                    </Grid>
                    <Grid item sm={2.75} xs={12}>
                        <Link href="/">
                            <a className={classes.ImageContainer}>
                                <Box component="img" className={classes.Images} src={Category3} alt="Category" />
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item sm={5.4}>
                        <Link href="/">
                            <a className={classes.ImageContainer}>
                                <Box component="img" className={classes.Images} src={Category4} alt="Category" />
                            </a>
                        </Link>
                    </Grid>
                    <Grid item sm={6.6} xs={12}>
                        <Link href="/">
                            <a className={classes.ImageContainer}>
                                <Box component="img" className={classes.Images} src={Category5} alt="Category" />
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Category;