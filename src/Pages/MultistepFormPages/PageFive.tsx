// calebaren.github.io
import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography, Grid } from '@material-ui/core';


const PageFive = (props: any) => {
    const { values, nextStep, prevStep, handleSliderChange } = props;

    return (
        <FormPages.MiddlePage
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
        >
            <Typography
                variant="h6"
                align='left'
                gutterBottom={true}
            >
                Fraction of special sets in classrooms.
            </Typography>
            <Typography variant="body2" paragraph >
                Schedyool will strive to not place too many students from any one special set in any classroom, represented as a fraction of the total number of students in the room. For example, you may want the fraction of students in any classroom from the first special set to be at most 40%. For each special set, you can specify a different fraction.  Enter the fractions here, one for each special set, in the order in which you will give the special sets (e.g., ICT before ENL).
            </Typography>
            <Typography paragraph>
                Use the sliders to input the fraction of students from each special set in any classroom.
            </Typography>
            <Grid container>
            {
            values.specialSets.map((x: any, i: number) => {
                return (
                    <>
                        <Grid item xs={2}>
                            <Typography variant="h6" paragraph align='center' >
                                Set {i+1}
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Controls.SpecialSliders
                                defaultValue={x}
                                key={i}
                                handleSliderChange={(e: any, value: any) => handleSliderChange(e,value,i)} 
                            />
                        </Grid>
                    </>
                );
            })}
            </Grid>
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

export default PageFive;
