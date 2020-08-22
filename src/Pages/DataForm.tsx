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
    numBlendedLearning: 1,
    maxGrade: 1,
    numSchedules: 1,
    numRooms: 1,
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
        handlePackedSetsChange,
        handleGradeChange,
    } = useForm(initialFieldValues);

    const helpTexts = {
        numBlendedLearning: 'Please enter a positive, whole number for the number of students.',
        numDays: 'Please enter a positive, whole number for the number of daily schedules.',
        numRooms: 'Please enter a positive, whole number for the number of classrooms available every day.',
        maxGrade: 'Please enter the number of grades in your school as a positive integer.',
        numSetsSameDay: 'Please enter the number of groups that need to be scheduled on the same day. Enter 0 if there are none.',
        numPairsDiffDay: 'Please enter the number of pairs that need to be scheduled on different days. Enter 0 if there are none.',
        numSpecialSets: 'Please enter the number of special sets, 0 if there are none.',
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
        const payload = {
            email: values.email,
            timelimit: 14,
            num_students: values.numBlendedLearning,
            num_rooms: values.numRooms,
            num_days: values.numDays,
            max_grade: values.maxGrade,
            num_same_day_sets: values.numSetsSameDay,
            num_diff_day_pairs: values.numPairsDiffDay,
            num_special_sets: values.numSpecialSets,
            // num_rooms_to_be_packed_into: [[1, 1, 2, 2, 1, 2], [2, 2, 2, 2, 2, 2]],
            // num_rooms_to_be_packed_into: [[], ...values.packedSpecialSets],
            fraction_for_special_set: values.specialSets,
            num_rooms_to_be_packed_into: values.packedSpecialSets,
            diff_file: '51, 86\n93, 71\n513, 511\n513, 423\n1, 437\n87, 238\n',
            main_file: '1,M,0,1\n4,F,0,1\n1,M,1,0\n3,F,0,0\n0,M,0,0\n1,M,0,0\n3,F,1,0\n1,M,0,0\n1,M,0,0\n4,F,0,0\n4,F,1,0\n5,F,1,0\n3,M,0,0\n3,F,0,0\n1,F,0,0\n2,M,0,1\n5,F,0,0\n2,F,0,0\n3,F,1,0\n5,F,0,0\n2,F,0,0\n4,M,0,0\n5,F,0,0\n1,F,1,0\n0,F,0,0\n5,M,1,0\n2,F,1,0\n0,M,1,0\n1,M,1,0\n0,M,0,0\n3,M,0,0\n2,F,0,0\n5,M,0,1\n0,F,0,0\n0,M,0,0\n2,F,0,0\n4,M,0,0\n2,M,0,0\n2,M,0,0\n2,M,1,0\n3,M,0,1\n1,F,0,0\n4,F,0,0\n5,F,0,0\n2,F,0,0\n1,F,0,0\n3,F,0,0\n2,F,0,0\n3,M,0,0\n3,M,0,0\n0,F,1,0\n3,F,1,0\n2,F,0,0\n5,F,0,0\n2,F,0,0\n1,M,0,0\n2,F,1,0\n0,F,0,0\n1,M,1,0\n0,M,0,1\n2,F,0,0\n2,F,0,0\n3,M,0,0\n1,F,0,0\n2,M,0,0\n5,M,0,0\n4,M,0,0\n5,M,0,0\n3,M,1,0\n1,M,0,0\n3,F,0,0\n5,F,0,0\n0,M,0,0\n2,M,1,0\n4,M,0,0\n0,F,0,0\n0,F,0,0\n3,M,0,1\n4,M,0,0\n5,F,0,0\n4,M,0,0\n3,F,0,0\n4,F,0,0\n1,F,0,0\n3,M,0,0\n0,M,0,0\n1,M,0,0\n2,M,0,1\n3,F,0,0\n5,F,0,0\n3,F,0,0\n1,F,0,0\n4,M,1,0\n3,M,0,0\n0,M,0,0\n2,M,0,1\n4,M,1,0\n4,M,0,0\n5,F,0,0\n5,F,0,0\n4,F,1,0\n2,M,1,0\n0,F,0,0\n4,M,0,0\n3,F,0,0\n0,F,0,0\n3,F,0,1\n0,M,0,0\n4,F,0,0\n5,M,0,0\n3,F,0,0\n2,M,0,0\n4,F,0,0\n1,M,0,1\n1,M,0,0\n1,F,0,0\n3,M,0,0\n5,F,0,0\n1,F,0,0\n5,M,0,0\n0,M,0,0\n3,M,1,0\n0,M,0,0\n5,F,0,0\n0,M,0,0\n2,M,0,0\n3,F,0,0\n5,M,0,0\n1,M,0,0\n4,M,0,0\n2,F,0,0\n0,M,0,0\n5,M,1,0\n2,M,0,0\n0,M,0,1\n1,M,0,0\n0,F,0,0\n2,F,0,0\n1,F,1,0\n4,F,0,0\n0,M,0,0\n2,F,0,0\n0,F,0,0\n3,M,0,0\n4,F,0,0\n1,F,0,0\n1,M,0,0\n3,F,1,0\n5,M,0,0\n5,F,0,0\n4,M,0,0\n4,M,0,0\n0,F,0,0\n0,M,0,0\n3,F,0,0\n3,M,0,0\n1,M,0,0\n0,M,0,0\n2,M,0,0\n1,F,0,0\n2,M,0,0\n2,F,1,1\n4,F,0,0\n1,F,0,1\n2,M,1,0\n3,F,0,0\n3,M,0,0\n5,M,0,0\n4,M,0,0\n4,F,0,0\n5,M,0,0\n1,F,0,0\n5,F,0,0\n1,F,0,0\n0,F,0,1\n4,M,0,0\n3,M,0,0\n5,F,0,0\n3,M,1,0\n1,F,0,0\n1,F,0,0\n0,F,0,0\n5,F,0,0\n1,M,0,0\n3,M,0,0\n0,M,0,0\n1,F,0,0\n1,F,0,0\n1,M,0,0\n4,F,0,0\n1,F,0,0\n1,M,0,0\n1,M,0,0\n5,F,0,1\n0,F,0,0\n3,M,0,0\n3,M,1,0\n5,M,0,1\n0,F,0,0\n3,M,0,0\n4,M,0,0\n5,M,0,0\n3,M,0,0\n3,M,0,0\n2,M,0,0\n0,F,0,0\n1,F,0,0\n1,M,0,0\n4,M,1,0\n2,F,0,0\n5,M,0,0\n2,M,0,0\n4,M,0,0\n5,M,0,0\n3,M,0,0\n5,F,0,0\n4,F,0,0\n1,F,0,0\n1,M,0,0\n0,M,0,0\n0,M,1,0\n4,M,0,0\n1,M,1,1\n2,M,1,0\n0,M,0,0\n4,M,1,0\n1,F,0,0\n0,M,0,0\n1,F,1,0\n4,M,1,1\n0,F,0,0\n2,F,0,0\n5,M,0,0\n5,M,0,1\n4,M,0,0\n0,F,0,0\n5,M,1,0\n1,F,0,0\n0,M,0,0\n2,M,0,0\n0,F,0,0\n1,F,1,0\n5,M,0,0\n4,F,0,0\n0,M,0,0\n4,F,0,0\n2,M,0,0\n4,M,0,0\n2,M,0,0\n2,M,0,0\n4,F,0,0\n1,M,0,0\n2,M,0,0\n5,F,0,1\n5,M,0,0\n2,M,0,1\n0,M,0,0\n4,M,1,0\n2,F,0,0\n1,F,0,0\n4,F,0,0\n2,M,0,0\n5,M,0,0\n4,F,0,0\n0,M,0,0\n5,M,0,0\n1,F,0,0\n4,F,0,0\n1,M,0,0\n5,F,0,0\n3,M,0,0\n3,M,0,0\n2,F,0,0\n0,M,0,0\n1,F,0,0\n0,F,0,0\n5,F,0,0\n5,M,1,0\n3,M,0,0\n5,M,0,0\n1,F,0,1\n2,M,0,0\n1,M,0,0\n0,F,0,0\n3,F,0,0\n2,M,0,0\n4,M,0,0\n1,M,1,0\n0,M,0,0\n5,M,0,0\n5,F,0,0\n1,F,0,0\n2,M,0,0\n3,F,0,0\n4,M,0,0\n3,F,1,0\n3,M,0,0\n4,F,0,0\n5,F,0,0\n0,F,0,0\n4,F,0,0\n4,F,0,0\n4,F,0,0\n0,F,0,0\n3,M,0,0\n5,M,0,0\n0,M,0,0\n0,M,1,0\n5,M,0,0\n3,M,0,0\n0,F,0,0\n1,M,1,0\n0,F,0,0\n3,F,0,0\n2,F,0,0\n5,M,1,0\n0,M,0,1\n2,F,0,0\n5,M,0,1\n1,F,0,0\n5,M,1,0\n1,M,0,1\n5,F,0,0\n2,M,0,0\n5,M,0,0\n3,F,0,0\n1,F,0,0\n5,F,0,1\n0,M,0,0\n2,F,0,0\n0,F,0,0\n4,M,0,0\n5,M,0,0\n3,M,0,0\n0,M,0,1\n3,F,0,1\n1,F,1,0\n0,M,0,0\n3,F,0,0\n4,F,1,1\n1,F,0,1\n0,F,0,1\n4,F,0,0\n1,F,0,0\n5,M,1,0\n3,F,0,0\n5,M,0,0\n1,F,0,0\n4,F,0,0\n2,F,0,0\n3,M,0,0\n0,F,0,0\n0,M,0,0\n5,M,0,1\n4,F,0,0\n0,M,0,0\n4,M,0,0\n0,M,0,0\n0,M,0,0\n3,M,0,0\n2,M,0,0\n1,M,0,0\n4,M,0,0\n1,F,0,0\n2,M,0,0\n1,F,0,0\n2,F,0,0\n3,F,0,0\n2,F,0,0\n5,M,0,0\n0,M,0,0\n0,F,0,0\n5,M,0,0\n4,M,0,0\n0,M,0,0\n2,M,0,0\n1,F,1,0\n2,M,0,0\n4,M,1,0\n0,F,1,0\n1,F,0,0\n4,M,0,0\n0,M,0,1\n5,F,0,0\n2,F,0,0\n4,F,0,0\n1,M,0,0\n2,M,0,0\n1,F,0,1\n3,F,0,0\n2,M,0,0\n3,M,1,0\n0,F,0,0\n3,M,0,0\n4,M,0,1\n5,M,0,0\n4,F,0,0\n1,F,1,0\n0,F,0,0\n1,F,0,0\n2,M,0,0\n4,F,0,0\n0,M,0,0\n4,M,0,0\n1,M,0,0\n0,M,0,0\n5,M,0,0\n4,F,0,0\n2,M,0,0\n5,F,1,0\n2,F,0,0\n1,F,0,0\n1,M,0,0\n4,F,0,0\n5,F,0,0\n2,F,0,0\n5,M,0,0\n5,M,0,0\n5,F,0,0\n1,F,0,0\n4,F,0,0\n3,M,0,0\n2,F,1,0\n2,F,0,0\n4,M,0,0\n1,M,0,0\n0,M,0,0\n2,M,0,0\n2,F,0,0\n4,F,1,0\n0,M,0,0\n0,F,0,0\n3,F,0,0\n4,M,0,0\n3,M,0,0\n3,F,0,0\n4,M,1,0\n1,M,0,0\n5,M,0,0\n3,F,0,0\n5,M,0,0\n5,F,0,1\n1,F,0,0\n0,F,0,0\n0,F,0,0\n4,F,0,0\n5,M,0,0\n4,M,1,0\n4,M,1,0\n5,F,0,0\n3,F,0,1\n3,M,0,0\n3,M,0,0\n4,M,0,0\n3,F,0,0\n3,F,0,0\n4,F,0,0\n3,F,0,0\n2,F,1,0\n1,F,0,0\n3,M,1,0\n3,F,0,0\n0,F,0,1\n1,M,0,0\n1,F,1,1\n1,F,0,0\n1,F,1,0\n4,M,0,0\n2,M,0,0\n3,F,0,0\n1,F,0,0\n5,M,0,0\n2,M,0,0\n1,M,1,0\n2,F,0,1\n3,M,0,0\n2,F,0,0\n3,F,0,0\n5,M,0,0\n5,M,0,0\n4,M,0,0\n2,M,0,0\n2,F,0,0\n2,M,0,0\n0,F,0,0\n5,F,0,0\n3,F,0,0\n0,M,0,0\n5,F,1,0\n5,M,1,0\n2,M,1,0\n0,F,0,0\n3,M,1,0\n1,M,0,0\n5,F,0,0\n2,M,0,0\n5,F,0,0\n0,F,0,0\n3,M,0,0\n3,M,0,0\n0,M,0,0\n2,F,1,0\n0,F,0,0\n3,M,1,0\n1,M,0,0\n1,M,1,0\n2,F,0,0\n0,M,0,0\n2,M,0,0\n2,F,0,0\n0,M,0,0\n2,M,0,0\n1,M,0,0\n1,M,0,0\n0,F,0,0\n1,F,0,0\n0,M,0,0\n5,M,0,0\n5,F,1,0\n0,M,1,0\n1,F,0,0\n3,F,0,0\n4,M,0,1\n2,F,0,0\n2,M,0,0\n5,M,0,0\n4,F,0,0\n1,F,1,0\n5,M,0,0\n0,M,0,0\n1,M,0,1\n4,F,1,0\n2,M,0,0\n1,M,0,0\n0,F,0,0\n5,F,0,0\n1,M,0,0\n0,M,0,0\n0,M,0,0\n2,F,0,0\n0,F,0,0\n1,M,0,1\n1,M,0,0\n0,F,0,0\n5,M,0,0\n5,M,0,0\n1,M,0,0\n3,M,0,0\n3,M,0,0\n3,F,0,0\n1,F,0,0\n1,M,0,0\n4,M,0,0\n1,M,1,0\n5,F,0,0\n0,F,0,0\n2,F,0,0\n0,M,0,0\n3,F,1,0\n2,M,0,0\n4,F,0,0\n4,F,0,0\n5,F,1,0\n0,F,0,0\n3,F,0,0\n2,M,0,0\n3,F,0,0\n5,M,1,0\n0,F,0,0\n3,F,0,0\n3,F,1,0\n5,F,0,0\n1,M,0,0\n5,F,0,1\n2,F,0,0\n4,F,1,0\n3,M,0,0\n1,F,0,0\n2,F,0,0\n5,F,0,1\n0,M,0,0\n5,F,0,0\n2,F,0,0\n1,M,0,0\n1,F,1,0\n1,F,0,0\n4,F,0,0\n3,F,0,0\n1,F,0,0\n1,F,0,0\n4,M,1,0\n4,F,0,0\n4,M,0,0\n1,F,0,0\n1,M,0,1\n2,F,0,0\n4,F,1,0\n1,F,0,0\n1,F,0,0\n0,F,0,0\n',
            room_file: '9\n9\n8\n9\n11\n12\n10\n9\n8\n10\n13\n10\n10\n9\n10\n10\n9\n11\n11\n10\n9\n9\n10\n10\n10\n10\n9\n10\n10\n9\n10\n',
            same_file: '583, 3, 205, 18, 3\n3, 205, 417\n223, 221\n57, 52\n69, 431, 433, 418\n86, 185, 181\n1, 323, 347, 349\n',
        }
        console.log(payload);

        const send = true;
        if (send) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            };
            fetch(postUrl, requestOptions)
                .then(response => console.log(response.json()))
        }
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
                    handleGradeChange={handleGradeChange}
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
                    handlePackedSetsChange={handlePackedSetsChange}
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