import React from "react";

const styles = {};

const changeColorAtRandom = (setActive, setLastTime) => {
    return setTimeout(() => {setActive(true)}, Math.floor(Math.random() * (5000 - 800)) + 800);
};

const handleClick = () => {

}

export default function TimeTest(props) {

    const [active, setActive] = React.useState(false);
    const [lastLoggedTime, setLastLoggedTime] = React.useState(null)

    return (
        <div>
            <button>start test</button>
            <br/>
            <br/>
            <br/>
            <button>react to me!</button>
        </div>
    );
}
