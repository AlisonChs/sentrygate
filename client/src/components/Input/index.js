import React from "react";
import "./styles.css"

export const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <Input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
}