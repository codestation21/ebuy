import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import useStyles from "Styles/Footer/FooterOne&two.styles";

//Data
import FooterOneData from "Data/Footer/FooterOne.data";

const FooterOne = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5" component="h5" className={classes.FooterTitle}>
                Online Shooping
            </Typography>
            <List>
                {FooterOneData &&
                    FooterOneData.map((item, i) => (
                        <ListItem key={i} className={classes.ListItem}>
                            <Link href={item.url}>
                                <a className={classes.Link}>{item.name}</a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default FooterOne;