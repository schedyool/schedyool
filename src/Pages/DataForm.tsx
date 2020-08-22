import React from 'react';
import { Grid, InputAdornment, Tooltip, Typography, Divider, Slider } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Controls from '../Components/Controls/Controls';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ReCAPTCHA from 'react-google-recaptcha';
import FormPages from './FormPages';
import PageHeader from '../Components/PageHeader';
import PagesList from './FormPagesList';

const initialFieldValues = {
    step: 1,
    fullName: '',
    email: '',
    numBlendedLearning: 0,
    numSchedules: 0,
    numDays: 1,
    numSetsSameDay: 0,
    numPairsDiffDay: 0,
    numSpecialSets: 0,
    specialSets: [],
    packedSpecialSets: [[]],
    files: [],
};

const DataForm = (): any => {
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleFileAdd,
        handleFileDelete,
        handleInputChange,
        handleSpecialSetChange,
        handleSliderChange,
    } = useForm(initialFieldValues);

    const helpTexts = {
        numBlendedLearning: 'Enter the number of students in the school who will participate in blended learning.  You will provide details about the students later, in csv (comma-separated-values) files.',
        numDays: 'Please enter a positive number.',
        numRooms: 'The number of classrooms available every day.',
        numSetsSameDay: 'The code allows the user to specify sets of children who should attend in-person instruction on the same days. The sets can be arbitrarily large, but the larger the set is, the less likely the goal will be achieved. You need to enter the number of such sets, 0 if there are none. The actual sets themselves will be added later. Keep in mind that the optimizer may not succeed at satisfying all the constraints.',
        numPairsDiffDay: 'You may also specify pairs of 2 students each who should be scheduled on different days. Enter the number of such pairs, 0 if there are none.',
        numSpecialSets: 'Enter here the number of special sets, 0 if there are none.',
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
            num_students: values.numBlendedLearning,
            num_rooms: values.numRooms,
            num_days: values.numDays,
            max_grade: 5,
            num_same_day_sets: values.numSetsSameDay,
            num_diff_day_pairs: values.numPairsDiffDay,
            num_special_sets: values.numSpecialSets,
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

    switch (values.step) {
        case 1:
            return (
                <PagesList.PageOne 
                    nextStep={nextStep}
                    handleInputChange={handleInputChange}
                    values={values}
                />
            );
        case 2:
            return (
                <PagesList.PageTwo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    helpTexts={helpTexts}
                    handleInputChange={handleInputChange}
                    values={values}
                />
            );
        case 3:
            return (
                <PagesList.PageThree
                    nextStep={nextStep}
                    prevStep={prevStep}
                    helpTexts={helpTexts}
                    handleInputChange={handleInputChange}
                    values={values}
                />
            );
        case 4:
            return (
                <PagesList.PageFour
                    nextStep={nextStep}
                    prevStep={prevStep}
                    helpTexts={helpTexts}
                    handleInputChange={handleInputChange}
                    handleSpecialSetChange={handleSpecialSetChange}
                    values={values}
                />
            );
        // Sliders for special sets
        case 5:
            return (
                <PagesList.PageFive
                    nextStep={nextStep}
                    prevStep={prevStep}
                    helpTexts={helpTexts}
                    handleSliderChange={handleSliderChange}
                    values={values}
                />
            );
        // Packing special sets
        case 6:
            return (
                <PagesList.PageSix
                    nextStep={nextStep}
                    prevStep={prevStep}
                    helpTexts={helpTexts}
                    handleSliderChange={handleSliderChange}
                    values={values}
                />
            );
        // Dropzone for files
        case 7:
            return (
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Controls.Dropzone
                        handleFileAdd={handleFileAdd}
                        handleFileDelete={handleFileDelete}
                        files={values.files}
                    />
                </FormPages.MiddlePage>
            )
        case 8:
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
        case 9:
            return (
                <Typography>
                    Your schedule has been sent!
                </Typography>
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