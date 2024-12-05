import { useState } from 'react';

export default function counter() {
    const [counter, setCounter] = useState(0);

    function countUp() {
        setCounter(counter + 1);
    }
    return (
        <div className="counter">
            Der aktuelle Wert ist: {counter}
            <button onClick={countUp}>Count up</button>
        </div>
    )
}