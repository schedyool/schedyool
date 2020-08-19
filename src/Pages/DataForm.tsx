import React from 'react';
import { Grid, TextField, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';

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
    const {values, setValues, handleInputChange} = useForm(initialFieldValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <FormControl>
                        <FormLabel>Radios</FormLabel>
                        <RadioGroup row={true}>
                            <FormControlLabel value="value-1" control={<Radio />} label="Button 1" />
                            <FormControlLabel value="value-2" control={<Radio />} label="Button 2" />
                            <FormControlLabel value="value-3" control={<Radio />} label="Button 3" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* <Grid item xs={6}>
                    
                </Grid> */}
            </Grid>
        </Form>
    )
};

export default DataForm;