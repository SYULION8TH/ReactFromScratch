import React, { useState, useEffect } from "react";

const Sample1 = () => {
    // 변화하는 값을 관리하는 부분
    const [count, setCount] = useState(0);

    // 숫자 증가
    const countUp = () => {
        setCount(count + 1);
    };
    // 숫자 감소
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log(`current count : ${count}`);
    }, [count]);

    return (
        <div>
            <button type='button' onClick={countUp}>
                +1
            </button>
            <button type='button' onClick={countDown}>
                -1
            </button>
            {/* 변경될 부분 */}
            <p>count : {count}</p>
        </div>
    );
};

export default Sample1;
