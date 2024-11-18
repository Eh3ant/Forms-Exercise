import React from "react";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
    const handleRemove = () => removeBox(id);

    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        margin: "10px",
    };

    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;
