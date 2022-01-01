import { Box, Stack, Typography, NativeSelect } from "@mui/material";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

//Styles
import useStyles from "Styles/News/NewsFilter.styles";

const NewsFilter = () => {
    const classes = useStyles();
    return (
        <Box>
            <Stack direction="row" className={classes.FilterContainer} sx={{ flexWrap: { sm: "unset", xs: "wrap" } }}>
                <Box sx={{ flex: { sm: "unset", xs: "100%" }, textAlign: { sm: "unset", xs: "center" } }}>
                    <Typography variant="body1" component="p" className={classes.NewsInfoText}>
                        <StarOutlinedIcon /> Fashions Article
                    </Typography>
                </Box>
                <Stack direction="row" sx={{ justifyContent: { sm: "right", xs: "center" }, flex: { sm: 1, xs: "100%" } }}>
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                        <Typography variant="body1" component="p" className={classes.SelectText}>
                            Show:{" "}
                        </Typography>
                        <Box>
                            <NativeSelect
                                defaultValue={10}
                                className={classes.Select}
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                            </NativeSelect>
                        </Box>
                    </Stack>
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                        <Typography variant="body1" component="p" className={classes.SelectText}>
                            Sort by:{" "}
                        </Typography>
                        <Box>
                            <NativeSelect
                                defaultValue="ascending"
                                className={classes.Select}
                            >
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                                <option value="popular">Popular</option>
                                <option value="rattinghigh">Ratting High</option>
                                <option value="rattinglow">Ratting Low</option>
                            </NativeSelect>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NewsFilter;