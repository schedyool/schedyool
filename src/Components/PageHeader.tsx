// calebaren.github.io
import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
    },
    pageHeader: {
        padding: theme.spacing(4),
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginBottom: theme.spacing(2),
    },
    pageIcon: {
        display: 'inline-block',
        color: '#3c44b1',
        [theme.breakpoints.width('sm')]: {
            display: 'none',
        },
    },
    pageTitle: {
        // padding: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6',
        },
    },
}));

const PageHeader = (props: any) => {
    const { title, subtitle, icon } = props;
    const classes = useStyles();

    return (
        <Paper elevation={0} square className={classes.root} >
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography 
                        variant="h4"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant="subtitle2"
                        component="div"
                    >
                        {subtitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
};

export default PageHeader;