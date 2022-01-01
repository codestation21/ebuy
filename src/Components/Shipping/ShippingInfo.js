import { useState } from 'react';
import { Box, Grid, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useForm } from "react-hook-form";

//Styles
import useStyles from "Styles/Shipping/ShippingInfo.styles";

//Components
import ShippingContent from "./ShippingInfo/ShippingContent";
import Summery from "./ShippingInfo/Summery";

const ShippingInfo = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    const steps = ['Your Order', 'Shipping', 'Payment'];
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
    }
    return (
        <Box>
            <Box className={classes.StepContainer}>
                <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon} className={classes.StepLavel}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
            <Grid component="form" container spacing={3} onSubmit={handleSubmit(onSubmit)}>
                <Grid item md={8} xs={12}>
                    {activeStep === steps.length &&
                        <Typography>
                            You are redirecting quickly!
                        </Typography>
                    }
                    <ShippingContent register={register} activeStep={activeStep} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Summery
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        steps={steps.length}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default ShippingInfo;

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderTop: `3px solid ${theme.palette.primary.gray_secondary}`
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderTop: `3px solid ${theme.palette.primary.gray_secondary}`
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderTop: `2px dashed ${theme.palette.primary.gray_secondary}`
    },
}));
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    display: 'flex',
    height: 22,
    alignItems: 'center',
    "& .QontoStepIcon-active": {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.primary.gray_secondary,
        border: `1px solid ${theme.palette.primary.gray_secondary}`
    },
    '& .QontoStepIcon-completedIcon': {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.primary.gray_secondary,
        border: `1px solid ${theme.palette.primary.gray_secondary}`,
        color: theme.palette.primary.light
    },
    '& .QontoStepIcon-circle': {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.gray_secondary}`
    }
}));
function QontoStepIcon(props) {
    const { active, completed, className } = props;
    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {active &&
                <div className="QontoStepIcon-active" />
            }
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                active === false ? (
                    <div className="QontoStepIcon-circle" />
                ) : ""
            )}
        </QontoStepIconRoot>
    );
}
QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};