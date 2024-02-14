import React, { useEffect, useState } from 'react';

interface TimerProps extends React.HTMLAttributes<HTMLSpanElement> {
    time: number;
    onTimesUp: () => void;

}

export function Timer(props: TimerProps) {
    const { time, onTimesUp, style } = props;
    let currentTime = time;
    let intervalId: any;
    const [ctime, setCTime] = useState<number>();

    const updateTime = () => {
        currentTime--;
        setCTime(currentTime);
        if (currentTime === 0) {
            onTimesUp();
            clearInterval(intervalId);
        }
    }

    useEffect(() => {
        setCTime(time);
        intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [time]);
    return (
        <div className='timer' style={{ ...style }}>
            {ctime}
        </div>
    );
}