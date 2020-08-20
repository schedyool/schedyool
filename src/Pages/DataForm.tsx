import React from 'react';
import { Grid, TextField, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, InputAdornment } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import Dropzone from '../Components/Dropzone';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

const initialFieldValues = {
    // id: 0,
    fullName: '',
    email: '',
    numBlendedLearning: 0,
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
                    {/* name */}
                    <TextField 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                        required
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    {/* numBlendedLearning */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Blended Learning"
                        name="numBlendedLearning"
                        value={values.numBlendedLearning}
                        onChange={handleInputChange}
                    />
                    {/* numSchedules */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Number of Schedules"
                        name="numSchedules"
                        value={values.numSchedules}
                        onChange={handleInputChange}
                    />
                    {/* numRooms */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Number of Rooms"
                        name="numRooms"
                        value={values.numRooms}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* email */}
                    <TextField 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                        required
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {/* numSetsSameDay */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Number of sets on the same day"
                        name="numSetsSameDay"
                        value={values.numSetsSameDay}
                        onChange={handleInputChange}
                    />
                    {/* numPairsDiffDay */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Number of pairs on different days"
                        name="numPairsDiffDay"
                        value={values.numPairsDiffDay}
                        onChange={handleInputChange}
                    />
                    {/* numSpecialSets */}
                    <TextField 
                        type="number"
                        variant="outlined"
                        label="Number of special sets"
                        name="numSpecialSets"
                        value={values.numSpecialSets}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Dropzone />
                </Grid>
            </Grid>
        </Form>
    )
};

/*
                    <FormControl>
                        <FormLabel>Radios</FormLabel>
                        <RadioGroup row={true}>
                            <FormControlLabel value="value-1" control={<Radio />} label="Button 1" />
                            <FormControlLabel value="value-2" control={<Radio />} label="Button 2" />
                            <FormControlLabel value="value-3" control={<Radio />} label="Button 3" />
                        </RadioGroup>
                    </FormControl>
*/
export default DataForm;