// calebaren.github.io
import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography } from '@material-ui/core';


const PageThree = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handleInputChange } = props;
    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
            values={values}
        >
            <Typography variant="body2" paragraph>
                Enter the number of learning pods, sets of siblings, or other special groups of students who should attend in-person instruction on the same day. These sets can be as large as you want. Please enter the number of such sets (or 0 if there are none. <em>Note: Schedyool may not succeed at satisfying all the constraints.</em>
            </Typography>
            <Controls.Input
                helpText={helpTexts.numSetsSameDay}
                label="Number of same-day groups"
                name="numSetsSameDay"
                value={values.numSetsSameDay}
                onInput={handleInputChange}
            />
            <Typography variant="body2" paragraph>
                You may also specify pairs of students who should be scheduled on different days. Enter the number of such pairs (or 0 if there are none).
            </Typography>

            <Controls.Input
                helpText={helpTexts.numPairsDiffDay}
                label="Number of pairs on different days"
                name="numPairsDiffDay"
                value={values.numPairsDiffDay}
                onInput={handleInputChange}
            />
        </FormPages.MiddlePage>
    );
};

export default PageThree;