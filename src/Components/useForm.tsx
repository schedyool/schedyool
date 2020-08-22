import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues: any) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log(typeof value);
        if ( typeof value != 'number' || value >= 0) {
            setValues({
                ...values,
                [name]: value
            })
        }
    };

    return {
        values, 
        setValues, 
        errors,
        setErrors,
        handleInputChange
    };
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1),
        },
    },
}));

export const Form = (props: any) => {
    const classes = useStyles();
    const { children, ...other } = props;

    return (
        <form 
            className={classes.root} 
            autoComplete="off"
            {...other}
        >
            {children}
        </form>
    );
};