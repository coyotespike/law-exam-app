import React from 'react';
import Draggable from 'react-draggable';
import { CircularProgress } from '@material-ui/core';

function Timer(props: {timeInMinutes: number}) {
    const [timeLeft, setTimeLeft] = React.useState(props.timeInMinutes);
    const [progress, setProgress] = React.useState(100);

    const format = (n: number) => `${n / 60 ^ 0}`.slice(-2) + ':' + ('0' + n % 60).slice(-2)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
            setProgress((prevProgress) => (prevProgress - (timeLeft / props.timeInMinutes)));
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Draggable>
            <div>
                <CircularProgress variant="static" value={progress} />
                <div>Time remaining: {format(timeLeft)}</div>
            </div>
        </Draggable>
    )
}


export default Timer;
