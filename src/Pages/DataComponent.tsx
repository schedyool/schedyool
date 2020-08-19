import React from 'react';
import DataForm from './DataForm';
import { Paper, makeStyles } from '@material-ui/core';
// import PageHeader from '../Components/PageHeader';
// import { IconButton } from '@material-ui/core';
// import SchoolIcon from '../../node_modules/@material-ui/icons/School';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const DataComponent = (): any => {

    const classes = useStyles();

    return (
        <>
            {/* <PageHeader 
                title="Form Design"
                subtitle="Form Design with Validation"
                icon={
                    <IconButton>
                        <SchoolIcon fontSize="large"/>
                    </IconButton>
                }
            /> */}
            <Paper className={classes.pageContent}>
                <DataForm />
            </Paper>
        </>
    );
};

export default DataComponent;