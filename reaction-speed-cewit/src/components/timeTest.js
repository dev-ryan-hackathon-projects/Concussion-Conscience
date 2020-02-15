import React from "react";

const styles = {
    buttonActive: {
        backgroundColor: "green"
    },
    buttonInactive: {
        backgroundColor: "red"
    }
};

const changeColorAtRandom = (setActive, setLastLoggedTime) => {
    return setTimeout(() => {
        setActive(true);
        setLastLoggedTime(Date.now());
    }, Math.floor(Math.random() * (2000 - 800)) + 800);
};

const handleClick = (
    setLastTime,
    setActive,
    lastLoggedTime,
    setLastLoggedTime,
    counter,
    setCounter
) => {
    setLastTime(Date.now() - lastLoggedTime);
    setActive(false);
    setLastLoggedTime(0);
    setCounter(counter - 1);
};

const startTest = setCounter => {
    setCounter(3);
};

export default function TimeTest(props) {
    const [active, setActive] = React.useState(false);
    const [lastLoggedTime, setLastLoggedTime] = React.useState(null);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        if (counter > 0 && active === false)
            changeColorAtRandom(setActive, setLastLoggedTime);
    }, [counter, active]);

    return (
        <div>
            <button onClick={() => startTest(setCounter)}>start test</button>
            <br />
            <br />
            <br />
            <button
                onClick={() =>
                    handleClick(
                        props.setLastTime,
                        setActive,
                        lastLoggedTime,
                        setLastLoggedTime,
                        counter,
                        setCounter
                    )
                }
                style={active ? styles.buttonActive : styles.buttonInactive}
            >
                react to me!
            </button>
        </div>
    );
}
