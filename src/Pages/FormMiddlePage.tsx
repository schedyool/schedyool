// calebaren.github.io
import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormMiddlePage = (props: any) => {
    const { nextStep, prevStep, children } = props;
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
            <Divider />
            <Grid item sm={12}>
                <Controls.Button
                    text="Continue"
                    color="primary"
                    onClick={myContinue}
                />
                <Controls.Button
                    text="Back"
                    color="default"
                    onClick={myPrevious}
                />
            </Grid>
        </Grid>
    )
}

export default FormMiddlePage;