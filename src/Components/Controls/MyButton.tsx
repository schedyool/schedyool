// calebaren.github.io
import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5),
    },
}));

const MyButton = (props: any) => {
    const { text, size, color, variant, onClick, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton 
            className={classes.root}
            variant={variant || "contained" }
            size={size || "large" }
            color={color || "primary"}
            {...other}
        >
            {text}
        </MuiButton>
    )
};

export default MyButton;