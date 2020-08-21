import React, { useState } from 'react';
import { makeStyles, Button, IconButton, Grid } from '@material-ui/core';
import Controls from './Controls/Controls';

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
    const { children, ...other } = props;
    console.log(props);

    return (
        <form 
            className={classes.root} 
            autoComplete="off"
            onSubmit={()=>console.log('testing')}
            {...other}
        >
            {children}
            <Grid item xs={12}>
                <Controls.Button type="submit" value="Submit" text="Submit" />
                <Controls.Button type="reset" text="Reset" color="default" />
            </Grid>
        </form>
    );
};