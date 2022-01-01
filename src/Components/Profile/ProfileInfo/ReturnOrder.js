import { useState, useEffect } from "react";
import { Box, Stack, Grid, InputBase, InputLabel, NativeSelect, Typography, SvgIcon, InputAdornment, ButtonBase } from "@mui/material";

//Components
import DataTable from "./ReturnOder/DataTable";

//Styles
import useStyles from "Styles/Profile/ReturnOrder.styles";

//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Data 
import CartData from "Data/Cart.data";

const ReturnOrder = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(CartData);
    const [returnItem, setReturnItem] = useState([]);
    const classes = useStyles();
    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        const productArray = CartData.filter(item => !returnItem.includes(item));
        let mathches = productArray
        if (input.length > 0) {
            mathches = productArray.filter(item => {
                const escapeRegExp = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.product.name.match(regex);
            })
        }
        setSuggestion(mathches);
    }, [returnItem, input])
    const returnHanlder = (item) => {
        var index = suggestion.findIndex(each => each.id == item.id);
        setReturnItem(oldArray => [...oldArray, suggestion[index]]);
        suggestion.splice(index, 1);
        setSuggestion(suggestion);
    }
    return (
        <Box>
            <Box className={classes.TabTitle}>
                <Typography variant="h6" component="h6">
                    Return Order
                </Typography>
            </Box>
            <Box>
                <InputBase
                    placeholder="Search for products"
                    value={input}
                    onChange={onChangeHandler}
                    className={classes.SearchBar}
                    startAdornment={(
                        <InputAdornment position="start" className={classes.SearchIcon}>
                            <SvgIcon viewBox="0 0 21 24">
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                />
            </Box>
            <Box sx={{ width: { sm: "unset", xs: "35em" }, mb: "2em" }}>
                {suggestion &&
                    suggestion.map((item, i) => (
                        <Stack key={i} direction="row" sx={{ mb: "10px", alignItems: "center" }}>
                            <Box sx={{ flex: "0 0 10%" }}>
                                <Box component="img" src={item.product.images[0].url} alt="ProductImage" className={classes.Images} />
                            </Box>
                            <Box sx={{ flex: "0 0 50%" }}>
                                <Box className={classes.ProductInfos}>
                                    <Typography variant="h6" component="h6">
                                        {item.product.name}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        By: The Cotton House
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ flex: "0 0 20%" }}>
                                <Typography variant="body1" component="p" className={classes.SizeInfo}>
                                    Size: S Qty: 2
                                </Typography>
                            </Box>
                            <Box sx={{ flex: "0 0 20%" }}>
                                <ButtonBase onClick={() => returnHanlder(item)} className={classes.AddReturnButton}>
                                    <Typography variant="body1" component="p">
                                        Add to Return
                                    </Typography>
                                </ButtonBase>
                            </Box>
                        </Stack>
                    ))
                }
            </Box>
            <Box>
                <DataTable
                    products={returnItem}
                    setSuggestion={setSuggestion}
                    setReturnItem={setReturnItem}
                />
            </Box>
            {returnItem && returnItem.length > 0 &&
                <Box>
                    <Grid container spacing={3}>
                        <Grid item md={4} >
                            Reason
                        </Grid>
                        <Grid item md={8}>
                            <NativeSelect className={classes.Select}>
                                <option value={10}>Select One</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            Comments
                        </Grid>
                        <Grid item md={8}>
                            <InputBase
                                placeholder="Damage and the wrong color or the product"
                                multiline
                                minRows={3}
                                className={classes.TextArea}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: "1px" }}>
                        <Grid item md={4}>
                            File attachments
                        </Grid>
                        <Grid item md={8}>
                            <Box>
                                <InputBase
                                    id="picture"
                                    type="file"
                                    sx={{ display: "none" }}
                                />
                                <InputLabel htmlFor="picture" className={classes.File}>
                                    Add File
                                </InputLabel>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                        <ButtonBase className={classes.AddReturnButton}>
                            <Typography variant="body1" component="p">
                                Complete Return Request
                            </Typography>
                        </ButtonBase>
                    </Box>
                </Box>
            }
        </Box>
    );
};
export default ReturnOrder;

