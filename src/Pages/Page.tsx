// calebaren.github.io
import React from 'react';
import { Paper, makeStyles, IconButton } from '@material-ui/core';
import PageHeader from '../Components/PageHeader';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const Page = (props: any): any => {
    const { children, title, subtitle, ...other } = props;
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.pageContent} {...other} >
                <PageHeader 
                    title={title}
                    subtitle={subtitle}
                />
                {children}
            </Paper>
        </div>
    );
};

export default Page;