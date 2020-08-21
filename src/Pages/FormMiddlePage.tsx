import React from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormMiddlePage = (props: any) => {
    const { nextStep, prevStep, handleInputChange, values, children, ...other } = props;
    const myContinue = (e: any) => {
        e.preventDefault();
        nextStep();
    }

    const myPrevious = (e: any) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <Grid container>
            {children}
            <Grid item sm={12}>
                <Controls.MyButton
                    text="Continue"
                    color="primary"
                    onClick={myContinue}
                />
                <Controls.MyButton
                    text="Back"
                    color="default"
                    onClick={myPrevious}
                />
            </Grid>
            
        </Grid>
    )
}

export default FormMiddlePage;