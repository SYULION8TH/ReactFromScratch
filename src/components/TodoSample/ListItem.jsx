import React from "react";

const ListItem = (props) => {
    const { item, idx, onDelete } = props;

    return (
        <li>
            <div className='list-item'>
                <p>{item}</p>
                <button type='button' onClick={() => onDelete(idx)}>
                    삭제
                </button>
            </div>
        </li>
    );
};

export default ListItem;
