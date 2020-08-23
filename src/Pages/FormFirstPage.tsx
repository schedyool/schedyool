// calebaren.github.io
import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormFirstPage = (props: any) => {
    const { nextStep, handleInputChange, values, children, ...other } = props;
    const myContinue = (e: any) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Grid container>
            {children}
            <Divider />
            <Grid item sm={12}>
                <Controls.MyButton
                    text="Continue"
                    color="primary"
                    onClick={myContinue}
                />
            </Grid>
        </Grid>
    )
}

export default FormFirstPage;