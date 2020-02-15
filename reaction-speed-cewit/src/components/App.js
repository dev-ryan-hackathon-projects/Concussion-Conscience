import React from "react";
import TimeTest from "./timeTest";

//const styles = {};

export default function App(props) {
    const [lastTime, setLastTime] = React.useState(0);
    const [times, setTimes] = React.useState([]);
    const [average, setAverage] = React.useState(null);

    React.useEffect(() => {
        if (lastTime !== 0) {
            times.push(lastTime);
        } else {
            if (times.length === 3) {
            }
        }
    }, [lastTime, times]);

    return (
        <div>
            <p>Hello reaction time!</p>
            <TimeTest setLastTime={setLastTime} />
            <p>
                {average
                    ? `your average time is ${average}ms`
                    : `previous time is ${lastTime}ms`}
            </p>
        </div>
    );
}
