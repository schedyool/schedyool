import React from 'react';
import { Grid, InputAdornment, Tooltip } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Controls from '../Components/Controls/Controls';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ReCAPTCHA from 'react-google-recaptcha';
import MyButton from '../Components/Controls/MyButton';

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
        const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        let temp = {
            fullName: '',
            email: '',
        };
        temp.fullName = values.fullName ? '' : 'Your name is required.';
        temp.email = re.test(values.email) ? '' : 'Your email is required.';
        setErrors({
            ...temp
        });

        return Object.values(temp).every(x => x === '');
    }

    const handleCaptcha = (value: any) => {
        console.log("captcha value:", value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            window.alert('validated response...');
        }
    };

    const helpTitles = {
        numBlendedLearning: 'Number of students in Blended Learning',
        numSchedules: 'Number of schedules',
        numRooms: '',
    };

    const helpTexts = {
        numBlendedLearning: 'Enter the number of students in the school who will participate in blended learning.  You will provide details about the students later, in csv (comma-separated-values) files.',
        numSchedules: 'You need to enter the number of schedules needed. For students attending, say, e.g., either Monday-Tuesday or Thursday-Friday and alternate Wednesdays, this number would be 2. For those attending in person 1/3 of the time, you need three schedules, so enter 3.',
        numRooms: 'The number of classrooms available every day.',
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Controls.Input 
                    helpText="Enter your full name."
                    icon={<AccountCircle />}
                    required
                    type="text"
                    label="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onInput={handleInputChange}
                    // error={errors.fullName}
                />
                <Controls.Input 
                    helpText="Enter your email."
                    icon={<EmailIcon />}
                    required
                    type="text"
                    label="Email"
                    name="email"
                    value={values.email}
                    onInput={handleInputChange}
                    // error={errors.email}
                />
                <Controls.Input 
                    helpTitle={helpTitles.numBlendedLearning}
                    helpText={helpTexts.numBlendedLearning}
                    label="Number of students for Blended Learning"
                    name="numBlendedLearning"
                    value={values.numBlendedLearning}
                    onInput={handleInputChange}
                />
                <Controls.Input
                    helpTitle={helpTitles.numSchedules}
                    helpText={helpTexts.numSchedules}
                    label="Number of Schedules"
                    name="numSchedules"
                    value={values.numSchedules}
                    onInput={handleInputChange}
                />
                <Controls.Input
                    helpText={helpTexts.numRooms}
                    label="Number of Rooms"
                    name="numRooms"
                    value={values.numRooms}
                    onInput={handleInputChange}
                />
                <Controls.Input
                    helpText="add"
                    label="Number of sets on the same day"
                    name="numSetsSameDay"
                    value={values.numSetsSameDay}
                    onInput={handleInputChange}
                />
                <Controls.Input
                    helpText="add"
                    label="Number of pairs on different days"
                    name="numPairsDiffDay"
                    value={values.numPairsDiffDay}
                    onInput={handleInputChange}
                />
                <Controls.Input
                    helpText="add"
                    label="Number of special sets"
                    name="numSpecialSets"
                    value={values.numSpecialSets}
                    onInput={handleInputChange}
                />
                <Grid item xs={12}>
                    <Controls.Dropzone />
                </Grid>
                <Grid item xs={12}>
                    {/* <ReCAPTCHA sitekey="6LctKMEZAAAAAN4NYXg27JMINCdmFm-knz9Ea4-p" onChange={handleCaptcha} /> */}
                </Grid>
                <Grid item xs={12}>
                    <Controls.MyButton type="submit" value="Submit" text="Submit" />
                    <Controls.MyButton type="reset" text="Reset" color="default" />
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