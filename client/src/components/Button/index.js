import React from "react";
import "./styles.css"

export const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <Button type={Type} onClick={onClick}>
            {Text}
        </Button>
    );
}