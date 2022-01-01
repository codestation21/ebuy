import { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import dynamic from 'next/dynamic';
import 'odometer/themes/odometer-theme-default.css';
const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});
import VisibilitySensor from "react-visibility-sensor";

const CounterUp = ({ value }) => {
    const [odometerValue, setOdometerValue] = useState(0);
    const [view, setView] = useState(false);
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setView(true);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setOdometerValue(value);
        }, 10);
    }, []);
    return (
        <VisibilitySensor onChange={onVisibilityChange} offset={8} delayedCall>
            <Box>
                <Odometer
                    value={view ? odometerValue : 0}
                    format="(,ddd)"
                    theme="default"
                />
            </Box>
        </VisibilitySensor>
    );
};
export default CounterUp;