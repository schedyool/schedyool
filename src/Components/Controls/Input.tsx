import React from 'react';
import { TextField } from '@material-ui/core';


const Input = (props: any): JSX.Element => {
    const { variant, label, type, name, value, onChange, ...other} = props;
    console.log(props)
    return (
        <TextField
            variant={variant || "outlined"}
            type={type || "number"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
        />
    );
};

export default Input;