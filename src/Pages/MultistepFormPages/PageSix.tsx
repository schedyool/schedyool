// calebaren.github.io
import React from 'react';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';
import { Typography, Grid } from '@material-ui/core';


const PageSix = (props: any) => {
    const { values, nextStep, prevStep, handlePackedSetsChange } = props;
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
                Special sets in classroom by grade.
            </Typography>
            <Typography variant="body2" paragraph>
                In addition, you may ask Schedyool to <em>pack</em> the students of each special set into a small number
of classrooms in order to minimize the number of special teachers needed (for, e.g., ICT or ENL).  For <strong>each</strong> special set, you need to enter one number <strong>for each grade</strong>.
            </Typography>
            <Typography variant="body2" paragraph>
                As an example, if there are 6 grades in your school and you want to specify special sets of students for ICT and ENL students, you will need to enter 6 numbers of rooms for the ICT students (1 number of rooms for each grade) and 6 numbers of rooms for the ENL students, for a total of 12 numbers
of rooms. These numbers should ideally be small (between 1-3) because they are classrooms. For example, 1 room (for kindergarten), 1 room (for 1st grade), 2 rooms (for 2nd grade), 2 rooms (for 3rd grade), 1 room (for 4th grade),and 2 rooms (for 5th grade) if you are a K-5 grade school. If you have no such constraint, select <code>None</code>.  <em>Remember, you will have to enter these numbers for each special set of students.</em>
            </Typography>

            <Grid container>
            {
                values.specialSets.map((x: any, i: number) => {
                    return (
                        <div key={i}>
                            <Grid item xs={2}>
                                <Typography>
                                    Set {i+1}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                {[...Array(values.maxGrade + 1)].map((y: any, j: number) => {
                                    return (
                                        <Controls.SelectField
                                            key={j}
                                            setIndex = {i}
                                            gradeIndex = {j}
                                            maxGrade={values.maxGrades}
                                            values={values}
                                            handlePackedSetsChange={handlePackedSetsChange}
                                        />
                                    )
                                })}
                            </Grid>
                        </div>
                    )
                })
            }
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

export default PageSix;
