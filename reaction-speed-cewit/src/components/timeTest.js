import React from "react";

const styles = {
    buttonActive: {
        backgroundColor: "green"
    },
    buttonInActive: {
        backgroundColor: "red"
    }
};

const changeColorAtRandom = (setIsActive, setLastLoggedTime) => {
    return setTimeout(() => {
        setIsActive(true);
        setLastLoggedTime(Date.now());
    }, Math.floor(Math.random() * (2000 - 800)) + 800);
};

const handleClick = (
    setLastTime,
    setIsActive,
    lastLoggedTime,
    setLastLoggedTime,
    counter,
    setCounter
) => {
    setLastTime(Date.now() - lastLoggedTime);
    setIsActive(false);
    setLastLoggedTime(0);
    setCounter(counter - 1);
};

const startTest = (setCounter, setIsTesting, hasTested, resetTest) => {
    if (hasTested) {
        resetTest();
    }
    setIsTesting(true);
    setCounter(3);
};

export default function TimeTest(props) {
    const [isActive, setIsActive] = React.useState(false);
    const [lastLoggedTime, setLastLoggedTime] = React.useState(null);
    const [counter, setCounter] = React.useState(0);
    const [isTesting, setIsTesting] = React.useState(false);

    React.useEffect(() => {
        if (counter > 0 && isActive === false)
            changeColorAtRandom(setIsActive, setLastLoggedTime);
        else setIsTesting(false);
    }, [counter, isActive]);

    const resetTest = () => {
        props.resetTest();
        setLastLoggedTime(null);
    };

    return (
        <div>
            <button
                onClick={() =>
                    startTest(
                        setCounter,
                        setIsTesting,
                        props.hasTested,
                        resetTest
                    )
                }
                disabled={isTesting}
            >
                start test
            </button>
            <br />
            <br />
            <br />
            <button
                onClick={() =>
                    handleClick(
                        props.setLastTime,
                        setIsActive,
                        lastLoggedTime,
                        setLastLoggedTime,
                        counter,
                        setCounter
                    )
                }
                style={isActive ? styles.buttonActive : styles.buttonInActive}
                disabled={!isActive}
            >
                react to me!
            </button>
        </div>
    );
}
