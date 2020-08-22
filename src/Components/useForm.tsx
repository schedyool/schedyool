import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues: any) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if ( (typeof value == typeof 0 && value >= 0) || typeof value != typeof 0) {
            setValues({
                ...values,
                [name]: value
            })
        }
    };

    const handleFileAdd = (file: any) => {
        setValues({
            ...values,
            files: values.files.concat(file)
        });
    };

    const handleFileDelete = (file: any) => {
        const allFiles = [...values.files];
        allFiles.splice(file, 1);
        setValues({
            ...values,
            files: allFiles,
        });
    };

    const handleSpecialSetChange = (e: any) => {
        const { value } = e.target;
        const newSpecialSets = parseInt(value >= 0 ? value : 0)
        // if new special set is greater, then append 1s.
        if (newSpecialSets > values.specialSets.length) {
            setValues({
                ...values,
                numSpecialSets: newSpecialSets,
                specialSets: values.specialSets.concat(
                    Array.from(Array(newSpecialSets-values.numSpecialSets), () => 1)
                )
            });
        } 
        // if new special set value is lesser, then slice.
        else {
            setValues({
                ...values,
                numSpecialSets: newSpecialSets,
                specialSets: values.specialSets.slice(0, newSpecialSets)
            })
        }
        
    }

    return {
        values, 
        setValues, 
        handleFileAdd,
        handleFileDelete,
        errors,
        setErrors,
        handleInputChange,
        handleSpecialSetChange
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