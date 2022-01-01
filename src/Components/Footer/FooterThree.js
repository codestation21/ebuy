import { Box, Stack, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

//Styles
import useStyles from "Styles/Footer/FooterThree.styles";

//Google play and apple id image
import GooglePlayImage from "Assets/Google-play.png";
import AppleIdImage from "Assets/AppleId.png";

const FooterThree = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h5" component="h5" className={classes.FooterTitle}>
                Exprience eby app on mobile
            </Typography>
            <Stack direction="row" spacing={2} className={classes.MobileDownloadBtn}>
                <Box>
                    <Link href="/">
                        <a>
                            <Image src={GooglePlayImage} width={236} height={72} alt="Google Play" />
                        </a>
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <a>
                            <Image src={AppleIdImage} width={210} height={72} alt="Apple Id" />
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Typography variant="h5" component="h5" className={classes.FooterTitle}>
                Keep in Touch
            </Typography>
            <List className={classes.List}>
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
    );
};
export default FooterThree;