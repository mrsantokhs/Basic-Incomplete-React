import React, { useState } from 'react'
import style from "./App.css"


const StateCounter = () => {
    const initialState = 0;
    const [number, setNumber] = useState(initialState);
    const increaseHandler = () => {
        return setNumber(number + 1)
    }

    return (
        <div class="container">
            <h4>{number}</h4>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={() => setNumber(number - 1)}>Decrease</button>
            <button onClick={() => setNumber(0)}>Reset</button>


        </div>
    )
}

export default StateCounter

