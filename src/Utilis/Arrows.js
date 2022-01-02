import { ButtonBase, SvgIcon } from "@mui/material";

//Custom Icon
import { ArrowLeftIcon, ArrowRightIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Home/Carousels.styles";



import React from "react";

export const DotButton = ({ selected, onClick }) => {
    return (
        <ButtonBase
            className={`embla__dot ${selected ? "is-selected" : ""}`}
            type="button"
            onClick={onClick}
        />
    )
};

export const PrevButton = ({ enabled, onClick }) => {
    const classes = useStyles();
    return (
        <ButtonBase
            className={`embla__button embla__button--prev ${classes.ArrowLeft}`}
            onClick={onClick}
            disabled={!enabled}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowLeftIcon}
            </SvgIcon>
        </ButtonBase>
    )
};

export const NextButton = ({ enabled, onClick }) => {
    const classes = useStyles();
    return (
        <ButtonBase
            className={`embla__button embla__button--next ${classes.ArrowRight}`}
            onClick={onClick}
            disabled={!enabled}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowRightIcon}
            </SvgIcon>
        </ButtonBase>
    )
};