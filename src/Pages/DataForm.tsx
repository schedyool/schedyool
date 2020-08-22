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
                    {/* <Typography variant="body2" paragraph>
                        Enter the number of students in the school who will participate in blended learning. Later, you will need to provide details about the students via <code>.csv</code> (comma-separated-values) files. A tutorial on how to save your Excel files to <code>.csv</code> is available <a href="https://support.microsoft.com/en-us/office/save-a-workbook-to-text-format-txt-or-csv-3e9a9d6c-70da-4255-aa28-fcacf1f081e6" target="_blank" rel="noopener noreferrer">here</a>.
                    </Typography>
                    <Controls.Input
                        helpText={helpTexts.numBlendedLearning}
                        label="Number of Blended Learning students"
                        name="numBlendedLearning"
                        value={values.numBlendedLearning}
                        onInput={handleInputChange}
                    />
                    <Typography variant="body2" paragraph>
                        Enter the number of daily attendance schedules you need. For instance, if your student body is split between a Monday-Tuesday-Wednesday and a Wednesday-Thursday-Friday schedule, this number would be <strong>2</strong>. For those attending in person 1/3 of the time, this number would be <strong>3</strong>.
                    </Typography>
                    <Controls.Input
                        helpText={helpTexts.numDays}
                        label="Number of Days"
                        name="numDays"
                        value={values.numDays}
                        onInput={handleInputChange}
                    />
                    <Typography variant="body2" paragraph>
                        Enter the number of classrooms available each day.
                    </Typography>
                    <Controls.Input
                        helpText={helpTexts.numRooms}
                        label="Number of Rooms"
                        name="numRooms"
                        value={values.numRooms}
                        onInput={handleInputChange}
                    />
                </FormPages.MiddlePage> */}
        case 3:
            return (
                // <FormPages.MiddlePage
                //     nextStep={nextStep}
                //     prevStep={prevStep}
                //     handleInputChange={handleInputChange}
                //     values={values}
                // >
                //     <Typography variant="body2" paragraph>
                //         Enter the number of learning pods, sets of siblings, or other special groups of students who should attend in-person instruction on the same day. These sets can be as large as you want. Please enter the number of such sets (or 0 if there are none. <em>Note: Schedyool may not succeed at satisfying all the constraints.</em>
                //     </Typography>
                //     <Controls.Input
                //         helpText={helpTexts.numSetsSameDay}
                //         label="Number of same-day groups"
                //         name="numSetsSameDay"
                //         value={values.numSetsSameDay}
                //         onInput={handleInputChange}
                //     />
                //     <Typography variant="body2" paragraph>
                //         Alternatively, you may also specify pairs of students who should be scheduled on different days. Enter the number of such pairs (or 0 if there are none). <em>Warning: Please count the number of <strong>pairs</strong> of students, not the number of <strong>groups</strong>.</em>
                //     </Typography>

                //     <Controls.Input
                //         helpText={helpTexts.numPairsDiffDay}
                //         label="Number of pairs on different days"
                //         name="numPairsDiffDay"
                //         value={values.numPairsDiffDay}
                //         onInput={handleInputChange}
                //     />
                // </FormPages.MiddlePage>
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
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Typography
                        variant="h6"
                        align='left'
                        gutterBottom={true}
                    >
                        Special sets.
                    </Typography>
                    <Typography variant="body2" paragraph >
                        You may also specify groups of students (e.g., ICT and ENL students) for special consideration. You can enter as many sets as you wish but you probably only have a few. Let's call these "special sets. The treatment of these sets is a bit complicated. Enter here the number of special sets, 0 if there are none.
                    </Typography>
                    <Controls.Input
                        helpText={helpTexts.numSpecialSets}
                        label="Number of special sets"
                        name="numSpecialSets"
                        value={values.numSpecialSets}
                        onInput={handleSpecialSetChange}
                    />
                </FormPages.MiddlePage>
            );
        // Sliders for special sets
        case 5:
            return (
                <FormPages.MiddlePage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputChange={handleInputChange}
                    values={values}
                >
                    <Typography gutterBottom>
                        Custom marks
                    </Typography>
                    {[...Array(parseInt(values.numSpecialSets))].map((_, i) => {
                        return (
                            <Controls.SpecialSliders key={i}/>
                        );
                    })}
                    {/* <Controls.Input
                        helpText={helpTexts.numSpecialSets}
                        label="Number of special sets"
                        name="numSpecialSets"
                        value={values.numSpecialSets}
                        onInput={handleInputChange}
                    /> */}
                </FormPages.MiddlePage>
            );
        // Dropzone for files
        case 6:
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
        case 7:
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
        case 8:
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