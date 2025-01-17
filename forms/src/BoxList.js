import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'


const BoxList = () => {
    const [boxes, setBoxes] = useState([])


    const addBox = (box) => {
        setBoxes((preBox) => [...preBox, box])
    }

    const removeBox = (id) => {
        setBoxes((preBox) => preBox.filter((box) => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box) => (
                    <Box
                        key={box.id}
                        id={box.id}
                        width={box.width}
                        height={box.height}
                        backgroundColor={box.backgroundColor}
                        removeBox={removeBox}
                    />
                ))}
            </div>
        </div>
    );

}


export default BoxList