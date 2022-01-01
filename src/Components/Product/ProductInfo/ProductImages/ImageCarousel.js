import { useState } from "react";
import { Box, ButtonBase, SvgIcon, Stack } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
//KeenSlider css
import "keen-slider/keen-slider.min.css";
//Custom Icons
import { ArrowUp, ArrowDown } from "Utilis/Icons";

//styles
import useStyles from "Styles/Product/ImageCarousel.styles";

const ImageCorousel = ({ images, setCurrentImage }) => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider({
        spacing: 10,
        slidesPerView: 4,
        vertical: true,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <Box sx={{ px: "10px" }}>
            <div ref={sliderRef} className={`keen-slider ${classes.KeenSlider}`}>
                {images &&
                    images.map((image, i) => (
                        <div
                            className={`keen-slider__slide ${classes.SingleSlide}`}
                            key={i}
                            onClick={() => setCurrentImage(i)}
                        >
                            <Box component="img" src={image.url} className={classes.Images} alt="Image" />
                        </div>
                    ))
                }
            </div>
            {slider && (
                <Stack className={classes.ArrowButtonGroup} direction="row">
                    <ArrowLeft
                        onClick={(e) => e.stopPropagation() || slider.prev()}
                        disabled={currentSlide === 0}
                    />
                    <ArrowRight
                        onClick={(e) => e.stopPropagation() || slider.next()}
                        disabled={currentSlide === slider.details().size - 1}
                    />
                </Stack>
            )}
        </Box>
    );
};
export default ImageCorousel;

//ArrowLeft
function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ButtonBase
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            sx={{ mr: "3px" }}
        >
            <SvgIcon viewBox="0 0 23 13">
                {ArrowUp}
            </SvgIcon>
        </ButtonBase>
    )
}
//ArrowRight
function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ButtonBase
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            sx={{ ml: "3px" }}
        >
            <SvgIcon viewBox="0 0 23 13">
                {ArrowDown}
            </SvgIcon>
        </ButtonBase>
    )
}