import React from 'react';
import { TextField } from '@material-ui/core';


const Input = (props: any): JSX.Element => {
    const { variant, label, type, name, value, onInput, ...other} = props;
    return (
        <TextField
            variant={variant || "outlined"}
            type={type || "number"}
            label={label}
            name={name}
            value={value}
            onInput={onInput}
            {...other}
        />
    );
};

export default Input;