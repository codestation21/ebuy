import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
//KeenSlider CSS
import "keen-slider/keen-slider.min.css";

//Styles
import useStyles from "Styles/Home/Carousels.styles";

//Arrows
import { ArrowLeft, ArrowRight } from "Utilis/Arrows";

//Data
import CarouselData from "Data/Home/Carousels.data";

const Carousels = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [pause, setPause] = useState(false);
    const timer = useRef()
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 1000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        }
    })
    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef]);
    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 5000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])
    return (
        <Box sx={{ position: "relative" }}>
            <Box className="navigation-wrapper">
                <div ref={sliderRef} className={`keen-slider ${classes.Container}`}>
                    {CarouselData &&
                        CarouselData.map((carousel, i) => (
                            <div key={i} className="keen-slider__slide number-slide1">
                                <Link href={carousel.url}>
                                    <a className={classes.Link}>
                                        <Box component="img" src={carousel.image} alt="Carousel" />
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {slider && (
                    <Box>
                        <ArrowLeft
                            onClick={(e) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </Box>
                )}
            </Box>
            {slider && (
                <div className={classes.DotBtnContainer}>
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            />
                        )
                    })}
                </div>
            )}
        </Box>
    );
};
export default Carousels;