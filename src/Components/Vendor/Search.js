import { useState } from "react";
import { Box, Stack, Typography, InputBase, InputAdornment, SvgIcon, NativeSelect } from "@mui/material";

//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Vendor/Search.styles";

const Search = () => {
    const [input, setInput] = useState("");
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.VendorList}>
                <Typography variant="h4" component="h4" className="asldufh">
                    Vendor List
                </Typography>
                <InputBase
                    placeholder="Search for vendor"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    endAdornment={(
                        <InputAdornment position="end">
                            <SvgIcon viewBox="0 0 21 24" sx={{ fontSize: "18px" }}>
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    className={classes.SearchBar}
                />
            </Box>
            <Stack direction="row" sx={{ width: { md: "65%", mds: "100%" }, margin: "0 auto", my: "3em", flexWrap: { sm: "unset", xs: "wrap" } }}>
                <Box className={classes.VendorInfoText}>
                    <Typography variant="body1" component="p">
                        We have{" "}
                        <Typography variant="body1" component="span">
                            780
                        </Typography>
                        {" "}vendors now
                    </Typography>
                </Box>
                <Stack direction="row" sx={{ justifyContent: { sm: "right", xs: "left" }, flex: { sm: 1, xs: "0 0 100%" }, flexWrap: { sms: "unset", xs: "wrap" } }}>
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
export default Search;