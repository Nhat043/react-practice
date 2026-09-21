import { useEffect, useState } from "react";

export default function Clock() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    function handleClick() {
        setIsRunning(!isRunning);
    }

    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <section>
            <h2>Clock</h2>
            <p>{seconds} seconds</p>

            <button type="button" onClick={() => handleClick()}>{isRunning ? "Pause" : "Start"}</button>
            <button type="button" onClick={() => setSeconds(0)}>Reset</button>
        </section>
    )
}