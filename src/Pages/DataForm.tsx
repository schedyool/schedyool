import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: `theme.spacing(1)`,
        },
    },
}));

const initialFieldValues = {
    id: 0,
    fullName: '',
    email: '',
    blendedLearning: 0,
    numSchedules: 0,
    numRooms: 1,
    numSetsSameDay: 0,
    numPairsDiffDay: 0,
    numSpecialSets: 0,
};

const DataForm = (): any => {
    const [values, setvalues] = useState(initialFieldValues);
    const classes = useStyle();
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                    />
                    <TextField 
                        variant="outlined"
                        label="Email"
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </form>
    )
};

export default DataForm;