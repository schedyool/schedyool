// calebaren.github.io
import React from 'react';
import { Grid, Typography, Link, ListItemText, List, ListItem } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/Controls/Controls';
import ReCAPTCHA from 'react-google-recaptcha';
import FormPages from './FormPages';
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
    mainFile: [],
    roomFile: [],
    sameFile: [],
    diffFile: [],
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
        // const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let temp = {
            fullName: '',
            email: '',
            mainFile: '',
            roomFile: '',
            sameFileMissing: '',
            diffFileMissing: '',
            numSetsSameDay: '',
            numPairsDiffDay: '',
        };
        temp.fullName = values.fullName ? '' : 'Your name is required.';
        // temp.email = re.test(values.email) ? '' : 'Your email is required.';
        temp.mainFile = values.mainFile[0] ? '' : 'Please upload a file with your students.';
        temp.roomFile = values.roomFile[0] ? '' : 'Please upload a file with your room capacities.';
        temp.sameFileMissing = (values.numSetsSameDay > 0 && !values.sameFile[0]) ? 'Please upload a file with groups of students to be scheduled on the same day.' : '';
        temp.diffFileMissing = (values.numPairsDiffDay > 0 && !values.diffFile[0]) ? 'Please upload a file with pairs of students to be scheduled on different days.': '';

        window.alert(Object.values(temp).filter(x => x !== '').join('\n'));
        return true;
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
        
        if (validate()) {
            nextStep();
            const postUrl = 'https://lqi0rcs9b1.execute-api.us-east-1.amazonaws.com/prod/';
            const payload = {
                email: values.email,
                timelimit: 60,
                num_students: values.numBlendedLearning,
                num_rooms: values.numRooms,
                num_days: values.numDays,
                max_grade: values.maxGrade,
                num_same_day_sets: values.numSetsSameDay,
                num_diff_day_pairs: values.numPairsDiffDay,
                num_special_sets: values.numSpecialSets,
                fraction_for_special_set: values.specialSets,
                num_rooms_to_be_packed_into: values.packedSpecialSets,
                diff_file: values.diffFile ? values.diffFile: '',
                main_file: values.mainFile ? values.mainFile : '',
                room_file: values.roomFile ? values.roomFile : '',
                same_file: values.sameFile ? values.sameFile : '',
            }
            
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
        }
    };

    switch (values.step) {
        case 0:
            return (
                <>
                    <Typography variant="h6" gutterBottom={true}>Getting Started</Typography>
                    <Typography variant="body1" paragraph>
                        Thanks for using Schedyool!
                    </Typography>
                    <Typography variant="body2" paragraph>
                        This tool was designed to make scheduling for hybrid classrooms a breeze. 
                        To get started, please have ready:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <code>.csv</code> files with information on your students. Sample files are available here *insert link*.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Stuff 2
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Controls.MyButton onClick={() => console.log(values)} text="Schedyool!" />
                </>
                
            )
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
                >
                    <Typography
                        variant="h6"
                        align='left'
                        gutterBottom={true}
                    >
                        Upload your files.
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Dropzone
                                handleFileAdd={handleFileAdd}
                                handleFileDelete={handleFileDelete}
                                values={values}
                                name="mainFile"
                                text="Main file"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Dropzone
                                handleFileAdd={handleFileAdd}
                                handleFileDelete={handleFileDelete}
                                values={values}
                                name="roomFile"
                                text="Room file"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Dropzone
                                handleFileAdd={handleFileAdd}
                                handleFileDelete={handleFileDelete}
                                values={values}
                                name="sameFile"
                                text="Groups of students on same days"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Dropzone
                                handleFileAdd={handleFileAdd}
                                handleFileDelete={handleFileDelete}
                                values={values}
                                name="diffFile"
                                text="Pairs of students on different days"
                            />
                        </Grid>
                    </Grid>
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
                    <Typography variant="h6">Confirmation</Typography>
                </FormPages.SubmitPage>
            );
        case 9:
            return (
                <div>
                    <Typography variant="h6" gutterBottom={true}>Confirmation</Typography>
                    <Typography paragraph>
                        Your schedule has been sent. Please check your email for your schedules.
                    </Typography>
                    <Controls.MyButton onClick={() => setValues(initialFieldValues)} text="Create another schedule" />
                    <Link href="/">
                        <Controls.MyButton text="Home" color="default"/>
                    </Link>
                </div>
                
            )
    }
};


export default DataForm;