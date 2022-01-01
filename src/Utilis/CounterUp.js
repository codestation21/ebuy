import { useState } from "react"
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const CounterUp = ({ value }) => {
    const [view, setView] = useState(false);
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setView(true);
        }
    };
    return (
        <VisibilitySensor onChange={onVisibilityChange} offset={8} delayedCall>
            <div>
                <CountUp
                    start={0}
                    end={view ? value : 0}
                    duration={1}
                />
            </div>
        </VisibilitySensor>
    );
};
export default CounterUp;