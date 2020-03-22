import React, { useContext } from 'react';
import { changeInterval } from "../actions";
import { StoreContext } from '../context';

export const Interval = () => {
    const {state, dispatch} = useContext(StoreContext);
    const {currentInterval} = state;

    return (
        <div>
            <span>Интервал обновления секундомера: {currentInterval} сек. </span>
            <button onClick={() => dispatch(changeInterval(-1))}>-</button>
            <button onClick={() => dispatch(changeInterval(1))}>+</button>
        </div>
    );
};

