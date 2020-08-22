import React from 'react';
import { Paper, makeStyles, IconButton } from '@material-ui/core';
import PageHeader from '../Components/PageHeader';
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
                title="Home"
                subtitle="Home page."
                icon={
                    <IconButton>
                        <SchoolIcon fontSize="large"/>
                    </IconButton>
                }
            />
            <Paper className={classes.pageContent}>
                <h1>Nopeeeeeee</h1>
            </Paper>
        </>
    );
};

export default Scheduler;