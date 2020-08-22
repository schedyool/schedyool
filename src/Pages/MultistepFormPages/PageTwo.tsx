import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography } from '@material-ui/core';


const PageTwo = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handleInputChange } = props;
    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
            values={values}
        >
            <Typography variant="body2" paragraph>
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
        </FormPages.MiddlePage>
    );
};

export default PageTwo;