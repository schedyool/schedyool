// calebaren.github.io
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const useForm = (initialFieldValues: any) => {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if ( parseInt(value) ) {
            if ( parseInt(value) >= 0) {
                setValues({
                    ...values,
                    [name]: parseInt(value)
                })
            }
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }
    };

    // handles changes to max grade (and updates packedSpecialSets)
    const handleGradeChange = (e: any) => {
        const { value } = e.target;
        if ( parseInt(value) ) {
            if( parseInt(value) >= 0) {
                setValues({
                    ...values,
                    maxGrade: parseInt(value),
                    packedSpecialSets: 
                        Array.from(Array(values.numSpecialSets), () => {
                            return Array.from(Array(value), () => 100)
                        })
                })
            } else {
                setValues({
                    ...values,
                    maxGrade: 0,
                    packedSpecialSets: 
                        Array.from(Array(values.numSpecialSets), () => {
                            return Array.from(Array(1), () => 100)
                        }),
                })
            }
        } else {
            setValues({
                ...values,
                maxGrade: value,
                packedSpecialSets: 
                    Array.from(Array(values.numSpecialSets), () => {
                        return Array.from(Array(1), () => 100)
                    }),
            })
        }
    }

    const handleFileAdd = (files: any, name: any) => {
        const file = files[0]
        const reader = new FileReader();
        reader.onloadend = function (evt: any) {
            const res = evt.target.result;
            console.log(res)
            setValues({
                ...values,
                [name]: [file.name, res],
            });
        }
        reader.readAsText(file);
        // setValues({
        //     ...values,
        //     [name]: [file]
        // });
    };

    const handleFileDelete = (name: any) => {
        setValues({
            ...values,
            [name]: ''
        });
    };

    const handleSpecialSetChange = (e: any) => {
        // // if new special set is greater, then append 1s.
        const { value } = e.target;

        if ( parseInt(value) ) {
            if ( parseInt(value) >= 0) {
                const newSpecialSets = parseInt(value);
                if (newSpecialSets > values.specialSets.length) {
                    setValues({
                        ...values,
                        numSpecialSets: newSpecialSets,
                        specialSets: values.specialSets.concat(
                            Array.from(Array(newSpecialSets-values.numSpecialSets), () => 1)
                        ),
                        packedSpecialSets: values.packedSpecialSets.concat(
                            Array.from(Array(newSpecialSets-values.numSpecialSets), () => {
                                return Array.from(Array(values.maxGrade), () => 100)
                            })
                        ),
                    })
                } else {
                    setValues({
                        ...values,
                        numSpecialSets: newSpecialSets,
                        specialSets: values.specialSets.slice(0, newSpecialSets),
                        packedSpecialSets: values.packedSpecialSets.slice(0, newSpecialSets),
                    })
                }
            }
        } else {
            setValues({
                ...values,
                numSpecialSets: '',
                specialSets: [],
            });
        }
    };

    const handleSliderChange = (e: any, value: any, i: any) => {
        const oldSet = values.specialSets;
        oldSet[i] = value;
        setValues({
            ...values,
            specialSets: oldSet,
        });
    };

    const handlePackedSetsChange = (e: any, set: any, grade: any) => {
        const oldPackedSet = values.packedSpecialSets;
        oldPackedSet[set][grade] = e.target.value;
        setValues({
            ...values,
            packedSpecialSets: oldPackedSet,
        });
    }

    return {
        values, 
        setValues, 
        handleFileAdd,
        handleFileDelete,
        errors,
        setErrors,
        handleInputChange,
        handleSpecialSetChange,
        handleSliderChange,
        handlePackedSetsChange,
        handleGradeChange,
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