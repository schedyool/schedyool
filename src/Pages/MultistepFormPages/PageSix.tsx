import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography } from '@material-ui/core';


const PageSix = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handleSliderChange } = props;

    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
        >
            <Typography gutterBottom>
                Custom marks
            </Typography>
            {
            values.specialSets.map((x: any, i: number) => {
                return (
                    <h1>{i}</h1>
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
};

export default PageSix;