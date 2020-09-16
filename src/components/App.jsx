import React, { useEffect, useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => console.log(`current count : ${count}`), [count]);
    return (
        <div>
            <button type='button' onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button type='button' onClick={() => setCount(count - 1)}>
                Decrease
            </button>
            <p>Count : {count}</p>
        </div>
    );
};

export default App;
