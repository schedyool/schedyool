import React, { useState } from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography, Button } from '@material-ui/core';


const PageSix = (props: any) => {
    const { values, nextStep, prevStep, helpTexts, handleSliderChange } = props;
    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
        >
            <Typography gutterBottom>
                Packing special sets.
            </Typography>
            {
            values.specialSets.map((x: any, i: number) => {
                return (
                    <div key={i}>
                        {values.maxGrades}
                    </div>
                )
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