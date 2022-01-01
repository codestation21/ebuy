import { Box, SvgIcon } from "@mui/material";

//Custom Icon
import { ArrowLeftIcon, ArrowRightIcon } from "Utilis/Icons";

//Styles
import useStyles from "Styles/Home/Carousels.styles";

export const ArrowLeft = (props) => {
    const classes = useStyles();
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <Box
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            className={classes.ArrowLeft}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowLeftIcon}
            </SvgIcon>
        </Box>
    )
}
export const ArrowRight = (props) => {
    const classes = useStyles();
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <Box
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            className={classes.ArrowRight}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowRightIcon}
            </SvgIcon>
        </Box>
    )
}