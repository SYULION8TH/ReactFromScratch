import React from "react";
import ListItem from "./ListItem.jsx";

const PropsSample = () => {
    const list = [
        { name: "YOO", age: 30 },
        { name: "KIM", age: 21 },
        { name: "LEE", age: 23 },
        { name: "PARK", age: 28 },
    ];
    return (
        <div>
            <h1>Props Sample</h1>
            <ul>
                {list.map((item, idx) => {
                    return (
                        <ListItem key={idx} name={item.name} age={item.age} />
                    );
                })}
            </ul>
        </div>
    );
};

export default PropsSample;
