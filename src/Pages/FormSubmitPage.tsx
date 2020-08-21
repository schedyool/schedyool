import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormSubmitPage = (props: any) => {
    const { prevStep, handleInputChange, values, children, ...other } = props;

    const myPrevious = (e: any) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <Grid container>
            {children}
            <Divider />
            <Grid item sm={12}>
                <Controls.MyButton 
                    type="submit" 
                    value="Submit" 
                    text="Submit" 
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

export default FormSubmitPage;