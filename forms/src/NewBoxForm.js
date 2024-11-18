import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: "",
    }
    const [formData, setFormData] = useState({ INITIAL_STATE })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData({ width: "", height: "", backgroundColor: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width: </label>
            <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                required
            />
            <label htmlFor="height">Height: </label>
            <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
            />
            <label htmlFor="backgroundColor">Background Color: </label>
            <input
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Box</button>
        </form>
    );


}

export default NewBoxForm;

