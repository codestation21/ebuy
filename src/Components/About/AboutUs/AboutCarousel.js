import { useState } from "react";
import { Box, ButtonBase, SvgIcon, Stack } from "@mui/material";
import { useKeenSlider } from "keen-slider/react"
//KeenSlider css
import "keen-slider/keen-slider.min.css";

//Styles
import useStyles from "Styles/About/AboutUs.styles";

//Custom Icons
import { ArrowLeftIcon, ArrowRightIcon } from "Utilis/Icons";

const AboutCarousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const classes = useStyles();
    const [sliderRef, slider] = useKeenSlider({
        spacing: 20,
        slidesPerView: 3,
        loop: true,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <Box sx={{ position: "relative" }}>
            <div ref={sliderRef} className={`keen-slider`}>
                {images &&
                    images.map((image, i) => (
                        <div className={`keen-slider__slide`} key={i} >
                            <Box component="img" src={image.url} alt="About" className={classes.CarouselImages} />
                        </div>
                    ))
                }
            </div>
            {slider && (
                <Stack direction="row" className={classes.Arrows}>
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
export default AboutCarousel;

//ArrowLeft
function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ButtonBase
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            sx={{ mr: "3px" }}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowLeftIcon}
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
            <SvgIcon viewBox="0 0 13 23">
                {ArrowRightIcon}
            </SvgIcon>
        </ButtonBase>
    )
}