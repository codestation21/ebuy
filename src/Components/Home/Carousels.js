import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
//KeenSlider CSS

//Styles
import useStyles from "Styles/Home/Carousels.styles";

//Arrows
import { DotButton, PrevButton, NextButton } from "Utilis/Arrows";

//Data
import CarouselData from "Data/Home/Carousels.data";

const Carousels = () => {
    const autoplay = useRef(
        Autoplay(
            { delay: 5000, stopOnInteraction: true },
            (emblaRoot) => emblaRoot.parentElement
        )
    );
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [autoplay.current]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const classes = useStyles();

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <Box sx={{ position: "relative" }}>
            <div className={`embla ${classes.Embla}`}>
                <div className="embla__viewport" ref={viewportRef}>
                    <div className={`embla__container ${classes.EmblaContainer}`}>
                        {CarouselData &&
                            CarouselData.map((carousel, i) => (
                                <div key={i} className={`embla__slide ${classes.EmblaSlide}`}>
                                    <Link href={carousel.url}>
                                        <a className={classes.Link}>
                                            <Box component="img" src={carousel.image} alt="Carousel" />
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            <div className={`embla__dots ${classes.DotBtnContainer}`}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </Box>
    );
};
export default Carousels;