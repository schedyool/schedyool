import React from 'react';
import DataForm from './DataForm';
import { Paper, makeStyles, IconButton } from '@material-ui/core';
import PageHeader from '../components/PageHeader';
import SchoolIcon from '@material-ui/icons/School';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const Scheduler = (): any => {
    const classes = useStyles();

    return (
        <>
            <PageHeader 
                title="Upload Files"
                subtitle="Upload .csv and .txt files to Schedyool to create your students' schedules."
                icon={
                    <IconButton>
                        <SchoolIcon fontSize="large"/>
                    </IconButton>
                }
            />
            <Paper className={classes.pageContent}>
                <DataForm />
            </Paper>
        </>
    );
};

export default Scheduler;