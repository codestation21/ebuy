import { Box, Grid } from "@mui/material";
import Link from "next/link";

//SeactionHeader
import SectionHeader from "Utilis/SectionHeader";

//Styles
import useStyles from "Styles/Home/Collections.styles";

//Images
import Collcetion1 from "Assets/collection/collection1.jpg"
import Collcetion2 from "Assets/collection/collection2.jpg"
import Collcetion3 from "Assets/collection/collection3.jpg"
import Collcetion4 from "Assets/collection/collection4.jpg"
import Collcetion5 from "Assets/collection/collection5.jpg"

const Collections = () => {
    const classes = useStyles();
    return (
        <Box>
            <SectionHeader
                title="Winter"
                abbreviation="Collection"
                description="Amazing products added recently in our catalog"
            />
            <Box>
                <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <Link href="/">
                            <a>
                                <Box component="img" className={classes.Images} src={Collcetion1} alt="image" />
                            </a>
                        </Link>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Grid container spacing={1} sx={{ mb: 1 }}>
                            <Grid item sm={6} xs={12}>
                                <Link href="/">
                                    <a>
                                        <Box component="img" className={classes.Images} src={Collcetion2} alt="image" />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Link href="/">
                                    <a>
                                        <Box component="img" className={classes.Images} src={Collcetion4} alt="image" />
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item sm={6} xs={12}>
                                <Link href="/">
                                    <a>
                                        <Box component="img" className={classes.Images} src={Collcetion3} alt="image" />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Link href="/">
                                    <a>
                                        <Box component="img" className={classes.Images} src={Collcetion5} alt="image" />
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Collections;