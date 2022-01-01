import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import useStyles from "Styles/Footer/FooterOne&two.styles";

//Data
import FooterTwoData from "Data/Footer/FooterTwo.data";

const FooterTwo = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5" component="h5" className={classes.FooterTitle}>
                Useful Links
            </Typography>
            <List>
                {FooterTwoData &&
                    FooterTwoData.map((item, i) => (
                        <ListItem key={i} className={classes.ListItem}>
                            <Link href={item.url}><a className={classes.Link}>{item.name}</a></Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default FooterTwo;