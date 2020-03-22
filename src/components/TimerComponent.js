import React, { useState, useContext, useEffect, useRef } from 'react';
import { Interval } from './IntervalComponent';
import { StoreContext } from '../context';
import { initialState } from "../store";


export const Timer = () => {
    const {state} = useContext(StoreContext);

    const [currentTime, setCurrentTime] = useState(initialState.currentInterval);
    const [isRunning, setIsRunning] = useState(false);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(
        () => {
            setCurrentTime(prevTime => prevTime + state.currentInterval);
        },
        isRunning ? state.currentInterval * 1000 : null
    );


    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
        setCurrentTime(0);
    };

    return (
        <div>
            <Interval/>
            <div>Секундомер: {currentTime} сек.</div>
            <div>
                <button onClick={handleStart}>Старт</button>
                <button onClick={handleStop}>Стоп</button>
            </div>
        </div>
    );
};
