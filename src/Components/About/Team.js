import { Box, Grid, List, ListItem, ButtonBase, Typography, SvgIcon } from "@mui/material";
import Link from "next/link";
import { Twitter, Instagram } from '@mui/icons-material';

//Custom Icon
import { FacebookIcon, LinkedInIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/About/Team.styles";

//SectionHeader
import SectionHeader from "Utilis/SectionHeader";

//Data
import TeamData from "Data/About/Team.data";

const Team = () => {
    const classes = useStyles();
    return (
        <Box>
            <SectionHeader
                title="Team"
                abbreviation="Members"
                description="We are expert from Ebuy World"
            />
            <Box sx={{ mb: "6em" }}>
                <Grid container spacing={7}>
                    <Grid item md={5} xs={12}>
                        <Box sx={{ my: "1em" }}>
                            <Typography variant="h6" component="h6" className={classes.HeaderTitle}>
                                {TeamData.subTitle}
                            </Typography>
                            <Typography variant="h5" component="h5" className={classes.Title}>
                                {TeamData.title}
                            </Typography>
                            <Typography variant="body1" component="p" className={classes.Description}>
                                {TeamData.description} <br /><br />
                                {TeamData.subDescription}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid container spacing={4}>
                            {TeamData?.teams?.length > 0 &&
                                TeamData?.teams.map((team, i) => (
                                    <Grid item md={6} xs={12} key={i} sx={{ mb: { sm: "0px", xs: "4rem" } }}>
                                        <Box sx={{ position: "relative" }}>
                                            <Box component="img" className={classes.Images} src={team.image} alt={team.name} />
                                            <Box className={classes.TeamContent}>
                                                <Typography variant="h6" component="h6" className={classes.Name}>
                                                    {team.name}
                                                </Typography>
                                                <Typography variant="body1" component="p" className={classes.Post}>
                                                    {team.post}
                                                </Typography>
                                                <List className={classes.List}>
                                                    <ListItem>
                                                        <Link href={team.facebook}>
                                                            <a target="_blank">
                                                                <ButtonBase>
                                                                    <SvgIcon viewBox="0 0 12 24">
                                                                        {FacebookIcon}
                                                                    </SvgIcon>
                                                                </ButtonBase>
                                                            </a>
                                                        </Link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Link href={team.twitter}>
                                                            <a target="_blank">
                                                                <ButtonBase>
                                                                    <Twitter />
                                                                </ButtonBase>
                                                            </a>
                                                        </Link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Link href={team.instagram}>
                                                            <a target="_blank">
                                                                <ButtonBase>
                                                                    <Instagram />
                                                                </ButtonBase>
                                                            </a>
                                                        </Link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Link href={team.linkedin}>
                                                            <a target="_blank">
                                                                <ButtonBase>
                                                                    <SvgIcon viewBox="0 0 24 24">
                                                                        {LinkedInIcon}
                                                                    </SvgIcon>
                                                                </ButtonBase>
                                                            </a>
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Team;