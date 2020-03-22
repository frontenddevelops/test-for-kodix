import React, { useReducer } from "react";
import { StoreContext } from "./context";
import { reducer, initialState } from './store';
import { Timer } from "./components/TimerComponent";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{dispatch, state}}>
            <Timer/>
        </StoreContext.Provider>
    );
};

export default App;
