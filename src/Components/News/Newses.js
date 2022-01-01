import { useState } from "react";
import { Box, Stack, Typography, ButtonBase, SvgIcon } from "@mui/material";
import { RemoveRedEyeOutlined, ModeCommentOutlined } from '@mui/icons-material';

//Custom Icon
import { LongArrowRightIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/News/Newses.styles";

//Paginations
import Paginations from "Components/Common/Paginations";

//Data
import NewsData from "Data/News.data";

const Newses = () => {
    const [page, setPage] = useState(1);
    const classes = useStyles();
    return (
        <Box sx={{ px: { lg: "4em", sm: "3em" } }}>
            {NewsData &&
                NewsData.map((news, i) => (
                    <Box key={i}>
                        <Box component="img" className={classes.Images} src={news.image} alt="news" />
                        <Box sx={{ px: "1em", mb: "3em" }}>
                            <Box className={classes.Newses}>
                                <Typography variant="h6" component="h6">
                                    {news.title}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {news.description}
                                </Typography>
                            </Box>
                            <Stack direction="row" sx={{ alignItems: "center" }}>
                                <Stack direction="row">
                                    <Typography className={classes.ViewsAndComment}>
                                        <RemoveRedEyeOutlined /> 22k
                                    </Typography>
                                    <Typography className={classes.ViewsAndComment}>
                                        <ModeCommentOutlined /> 45k
                                    </Typography>
                                </Stack>
                                <Box sx={{ textAlign: "right", flex: 1 }}>
                                    <ButtonBase className={classes.Button}>
                                        Read More
                                        <SvgIcon viewBox="0 0 24 11">
                                            {LongArrowRightIcon}
                                        </SvgIcon>
                                    </ButtonBase>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                ))
            }
            <Paginations
                count={8}
                setPage={setPage}
            />
        </Box>
    );
};
export default Newses;