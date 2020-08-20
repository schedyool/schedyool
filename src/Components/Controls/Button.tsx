import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5),
    },
}));

const Button = (props: any) => {
    const { text, size, color, variant, onClick } = props;
    const classes = useStyles();

    return (
        <MuiButton 
            className={classes.root}
            variant={variant || "contained" }
            size={size || "large" }
            color={color || "primary"}
            onClick={onClick}
        >
            {text}
        </MuiButton>
    )
};

export default Button;