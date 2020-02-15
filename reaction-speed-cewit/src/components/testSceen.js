import React from "react";
import TimeTest from "./timeTest";

//const styles = {};

export default function TestScreen(props) {
    const [lastTime, setLastTime] = React.useState(0);
    const [times, setTimes] = React.useState([]);
    const [average, setAverage] = React.useState(null);

    const resetTest = () => {
        setAverage(null);
        setTimes([]);
        setLastTime(0);
    };

    React.useEffect(() => {
        if (lastTime !== 0) {
            times.push(lastTime);
            console.log(times.length);
            if (times.length === 3) {
                setAverage(
                    times.reduce((acc, element) => acc + element) / times.length
                );
            }
        }
    }, [lastTime, times]);

    return (
        <div>
            <p>Hello {props.user.alias}! welcome to reaction time!</p>
            <TimeTest
                setLastTime={setLastTime}
                hasTested={average ? true : false}
                resetTest={resetTest}
            />
            <p>
                {average
                    ? `your average time is ${average}ms`
                    : lastTime > 0
                    ? `previous time is ${lastTime}ms`
                    : null}
            </p>
        </div>
    );
}
