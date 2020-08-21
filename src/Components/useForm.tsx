import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues: any) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
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
    const { children, onSubmit, ...other } = props;

    return (
        <form 
            className={classes.root} 
            autoComplete="off"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};