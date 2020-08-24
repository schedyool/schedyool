// calebaren.github.io
import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography } from '@material-ui/core';


const PageFour = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handleInputChange, handleSpecialSetChange } = props;
    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
            handleSpecialSetChange={handleSpecialSetChange}
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
                You may also specify groups of students (e.g., ICT and ENL students) for special consideration. You can enter as many sets as you wish but you probably only have a few. Let's call these "special sets". The treatment of these sets is a bit complicated. Enter here the number of special sets, 0 if there are none.
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
};

export default PageFour;
