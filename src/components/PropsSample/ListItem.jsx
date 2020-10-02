import React from "react";

const ListItem = (props) => {
    return (
        <li>
            <p>
                name : {props.name} | age : {props.age}
            </p>
        </li>
    );
};

export default ListItem;
