import React, { useState, useEffect } from "react";
import "./TodoSample.css";
import ListItem from "./ListItem.jsx";

const Todo = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const add = () => {
        setList([...list, text]);
        setText("");
    };

    const onDelete = (idx) => {
        let cloned = [...list];
        console.log("before : ", cloned);
        cloned.splice(idx, 1);
        console.log("after : ", cloned);
        setList(cloned);
    };

    return (
        <div>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type='button' onClick={add}>
                등록하기
            </button>
            <ul>
                {list.map((item, idx) => {
                    return (
                        <ListItem
                            key={idx}
                            idx={idx}
                            item={item}
                            onDelete={onDelete}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Todo;
