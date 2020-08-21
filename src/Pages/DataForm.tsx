import React from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Controls from '../Components/Controls/Controls';
import ReCAPTCHA from 'react-google-recaptcha';

const initialFieldValues = {
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
    const { values, setValues, errors, setErrors, handleInputChange} = useForm(initialFieldValues);
    const validate = () => {
        let temp = {
            fullName: '',
            email: '',
        };
        temp.fullName = values.fullName ? '' : 'Your name is required.';
        temp.email = (/$|.+@.+..+/).test(values.email) ? '' : 'Your email is required.';
        setErrors({
            ...temp
        });
    }
    // useEffect(() => console.log(initialFieldValues), []);

    const handleCaptcha = (value: any) => {
        console.log("captcha value:", value);
    };

    const handleSubmit = () => {
        window.alert('testing...');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                        required
                        type="text"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onInput={handleInputChange}
                    />
                    <Controls.Input 
                        label="Blended Learning"
                        name="numBlendedLearning"
                        value={values.numBlendedLearning}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        label="Number of Schedules"
                        name="numSchedules"
                        value={values.numSchedules}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        label="Number of Rooms"
                        name="numRooms"
                        value={values.numRooms}
                        onInput={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                        required
                        type="text"
                        label="Email"
                        name="email"
                        value={values.email}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        label="Number of sets on the same day"
                        name="numSetsSameDay"
                        value={values.numSetsSameDay}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        label="Number of pairs on different days"
                        name="numPairsDiffDay"
                        value={values.numPairsDiffDay}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        label="Number of special sets"
                        name="numSpecialSets"
                        value={values.numSpecialSets}
                        onInput={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Dropzone />
                </Grid>
                <Grid item xs={12}>
                    <ReCAPTCHA sitekey="6LctKMEZAAAAAN4NYXg27JMINCdmFm-knz9Ea4-p" onChange={handleCaptcha} />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Button type="submit" text="Submit" />
                    <Controls.Button text="Reset" color="default" />
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