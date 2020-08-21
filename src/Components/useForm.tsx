import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues: any) => {
    const [values, setValues] = useState(initialFieldValues);
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

export const Form = (props: { children: React.ReactNode; }) => {
    const classes = useStyles();

    const onSubmit = () => {
        console.log(props);
    };

    return (
        <form 
            className={classes.root} 
            autoComplete="off"
            onSubmit={onSubmit}
        >
            {props.children}
        </form>
    );
};