import { useState } from "react";
import { Box, Stack, Typography, RadioGroup, FormControlLabel, Radio, Rating, InputBase, ButtonBase, SvgIcon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useForm } from "react-hook-form";

//Custom Icons
import { CartIcon, LoevSolidIcon, ArrowUpDownIcon, ArrowDown, ArrowUp } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Product/ProductContents.styles";

//Data
import singleData from "Data/product.data";

const ProductContents = ({ setCurrentImage }) => {
    const classes = useStyles();
    const [productCount, setProductCount] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
    }
    const onProductCount = (e) => {
        setProductCount(Number(e.target.value.replace(/\D/g, '')))
    }
    const incrementHandler = () => {
        setProductCount(productCount + 1)
    }
    const decrementHandler = () => {
        if (productCount <= 1) {
            setProductCount(1)
        } else {
            setProductCount(productCount - 1)
        }
    }
    const currentImageHandler = (code) => {
        const index = singleData.images.findIndex(image => image.code === code);
        setCurrentImage(index);
    }
    return (
        <Box sx={{ mt: 2 }}>
            <Typography className={classes.ProductTitle} variant="h3" component="h3">
                {singleData.name}
            </Typography>
            <Stack direction="row" sx={{ mb: 3 }}>
                <Box>
                    <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={4}
                        readOnly
                        className={classes.Star}
                        emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                </Box>
                <Box sx={{ mt: "-2px", ml: "2px" }}>
                    ({singleData.reviews} reviews)
                </Box>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box>
                    <Typography className={classes.MainPrice} variant="h3" component="h3">
                        ${singleData.price}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center", ml: 2, mt: "6px" }}>
                    <Typography className={classes.DiscountPrice} variant="h3" component="h3">
                        {Math.floor(((singleData.originalPrice - singleData.price) / singleData.originalPrice) * 100)}% off
                    </Typography>
                    <Typography className={classes.OriginalPrice} variant="h3" component="h3">
                        ${singleData.originalPrice}
                    </Typography>
                </Box>
            </Stack>
            <Typography className={classes.ShortDescription} variant="body1" component="p">
                {singleData.description}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px", mt: "25px", flexWrap: { sms: "unset", xs: "wrap" } }}>
                    <Box sx={{ flex: { sms: "unset", xs: "0 0 100%" } }}>
                        <Typography className={classes.SizeAndColorstitle} variant="h6" component="h6">
                            Choose Size:
                        </Typography>
                    </Box>
                    <Box sx={{ flex: { sms: "unset", xs: "0 0 100%" }, ml: { sms: "0", xs: "10px" }, mt: { sms: "0", xs: "10px" } }}>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            {singleData &&
                                singleData.sizes.map((size, i) => (
                                    <FormControlLabel
                                        key={i}
                                        value={size.value.toLowerCase()}
                                        control={<Radio />}
                                        className={classes.RadioButton}
                                        label={size.value}
                                    />
                                ))
                            }
                        </RadioGroup>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", mb: "15px", flexWrap: { sms: "unset", xs: "wrap" } }}>
                    <Box sx={{ flex: { sms: "unset", xs: "0 0 100%" } }}>
                        <Typography className={classes.SizeAndColorstitle} variant="h6" component="h6">
                            Choose Color:
                        </Typography>
                    </Box>
                    <Box sx={{ flex: { sms: "unset", xs: "0 0 100%" }, ml: { sms: "0", xs: "10px" }, mt: { sms: "0", xs: "10px" } }}>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            {singleData &&
                                singleData.colors.map((color, i) => (
                                    <FormControlLabel
                                        key={i}
                                        value={color.code.toLowerCase()}
                                        control={<Radio />}
                                        label=""
                                        className={classes.ColorButton}
                                        sx={{ span: { backgroundColor: `${color.code} !important` } }}
                                        onClick={() => currentImageHandler(color.code)}
                                    />
                                ))
                            }
                        </RadioGroup>
                    </Box>
                </Stack>
                <Stack direction="row" sx={{ mt: "40px", flexWrap: { sms: "unset", xs: "wrap" } }}>
                    <Box sx={{ flex: { sms: "0 0 18%", xs: "0 0 100%" }, position: "relative" }}>
                        <InputBase
                            value={productCount}
                            type="text"
                            onChange={onProductCount}
                            className={classes.InputField}
                        />
                        <Box className={classes.CounterButton}>
                            <ButtonBase onClick={incrementHandler}>
                                <SvgIcon viewBox="0 0 23 13">
                                    {ArrowUp}
                                </SvgIcon>
                            </ButtonBase>
                            <ButtonBase onClick={decrementHandler}>
                                <SvgIcon viewBox="0 0 23 13">
                                    {ArrowDown}
                                </SvgIcon>
                            </ButtonBase>
                        </Box>
                    </Box>
                    <ButtonBase type="submit" className={classes.SubmitButton}>
                        <SvgIcon viewBox="0 0 22 23">
                            {CartIcon}
                        </SvgIcon>
                        Add to Cart
                    </ButtonBase>
                    <ButtonBase className={classes.LoveAndDownBtn}>
                        <SvgIcon viewBox="0 0 27 24">
                            {LoevSolidIcon}
                        </SvgIcon>
                    </ButtonBase>
                    <ButtonBase className={classes.LoveAndDownBtn}>
                        <SvgIcon viewBox="0 0 22 23">
                            {ArrowUpDownIcon}
                        </SvgIcon>
                    </ButtonBase>
                </Stack>
            </Box>
        </Box>
    );
};
export default ProductContents;