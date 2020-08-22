import React from 'react';
import { Grid, InputAdornment, Tooltip, Typography } from '@material-ui/core';
import { useForm, Form } from '../components/useForm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Controls from '../components/controls/Controls';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ReCAPTCHA from 'react-google-recaptcha';
import FormPages from './FormPages';

const initialFieldValues = {
    step: 1,
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
    const { 
        values, 
        setValues, 
        errors, 
        setErrors, 
        handleInputChange
    } = useForm(initialFieldValues);

    const helpTexts = {
        numBlendedLearning: 'Enter the number of students in the school who will participate in blended learning.  You will provide details about the students later, in csv (comma-separated-values) files.',
        numSchedules: 'You need to enter the number of schedules needed. For students attending, say, e.g., either Monday-Tuesday or Thursday-Friday and alternate Wednesdays, this number would be 2. For those attending in person 1/3 of the time, you need three schedules, so enter 3.',
        numRooms: 'The number of classrooms available every day.',
        numSetsSameDay: 'The code allows the user to specify sets of children who should attend in-person instruction on the same days. The sets can be arbitrarily large, but the larger the set is, the less likely the goal will be achieved. You need to enter the number of such sets, 0 if there are none. The actual sets themselves will be added later. Keep in mind that the optimizer may not succeed at satisfying all the constraints.',
        numPairsDiffDay: 'You may also specify pairs of 2 students each who should be scheduled on different days. Enter the number of such pairs, 0 if there are none.',
        numSpecialSets: 'You may also enter a collection of sets of students, e.g., ICT and ENL, for special treatment. You can enter as many sets as you wish but you probably only have a few. Let\'s call these "special sets. The treatment of these sets is a bit complicated. Enter here the number of special sets, 0 if there are none.',
    };

    // validate for names and emails
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

    // proceed to next step
    const nextStep = () => {
        const { step } = values;
        setValues({
            ...values,
            step: step + 1,
        });
    };

    // go back to previous step
    const prevStep = () => {
        const { step } = values;
        setValues({
            ...values,
            step: step - 1,
        });
    };

    const handleCaptcha = (value: any) => {
        console.log("captcha value:", value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        nextStep();
        window.alert('validated response...');
        // if (validate()) {
            const postUrl = 'https://lqi0rcs9b1.execute-api.us-east-1.amazonaws.com/prod/';
            // const postUrl = 'https://scheduler.schedyool.com'
            const payload = {
                email: "howard@cc.gatech.edu", 
                num_students: 800, 
                num_rooms: 30, 
                num_days: 3, 
                max_grade: 5, 
                num_same_day_sets: 160, 
                num_diff_day_pairs: 100, 
                num_special_sets: 3, 
                num_rooms_to_be_packed_into: [[1, 1, 2, 2, 1, 2], [3, 2, 3, 2, 2, 3], [2, 2, 2, 2, 2, 2]],
                fraction_for_special_set: [0.4, 0.3, 0.4]
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            };
            fetch(postUrl, requestOptions)
                .then(response => response.json())
            // }
    };

    switch(values.step) {
        case 1:
            return (
                <FormPages.FirstPage
                    nextStep={nextStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
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
                </FormPages.FirstPage>
            );
        case 2:
            return (
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Controls.Input
                        // helpTitle={helpTitles.numBlendedLearning}
                        helpText={helpTexts.numBlendedLearning}
                        label="Number of students for Blended Learning"
                        name="numBlendedLearning"
                        value={values.numBlendedLearning}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        // helpTitle={helpTitles.numSchedules}
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
                        helpText={helpTexts.numSetsSameDay}
                        label="Number of sets on the same day"
                        name="numSetsSameDay"
                        value={values.numSetsSameDay}
                        onInput={handleInputChange}
                    />
                    <Controls.Input
                        helpText={helpTexts.numPairsDiffDay}
                        label="Number of pairs on different days"
                        name="numPairsDiffDay"
                        value={values.numPairsDiffDay}
                        onInput={handleInputChange}
                    />
                </FormPages.MiddlePage>
            );
        case 3:
            return (
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Controls.Input
                        helpText={helpTexts.numSpecialSets}
                        label="Number of special sets"
                        name="numSpecialSets"
                        value={values.numSpecialSets}
                        onInput={handleInputChange}
                    />
                </FormPages.MiddlePage>
            );
        case 4:
            return (
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Controls.Dropzone />
                </FormPages.MiddlePage>
            )
        case 5:
            return (
                <FormPages.SubmitPage
                    handleSubmit={handleSubmit}
                    // nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                >
                    <Typography>Confirmation!</Typography>
                </FormPages.SubmitPage>
            );
        case 6:
            return (
                <h1>Your schedule has been sent!</h1>
            )
    }
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