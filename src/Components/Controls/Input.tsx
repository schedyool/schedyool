// calebaren.github.io
import React from 'react';
import { TextField, Grid, makeStyles } from '@material-ui/core';
import StartIcon from './HtmlTooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: theme.spacing(1.5),
    }
}));

const Input = (props: any): JSX.Element => {
    const { 
        variant, 
        label, 
        type, 
        name, 
        value, 
        error=null, 
        onInput,
        breakpoint,
        helpText,
        icon,
        ...other
    } = props;

    const classes = useStyles();
    return (
        <Grid item xs={breakpoint || 12}>
            <div className={classes.root}>
                <TextField
                    fullWidth={true}
                    InputProps={{
                        startAdornment: (<StartIcon helpText={helpText} icon={icon} />),
                    }}
                    variant={variant || "outlined"}
                    type={type || "number"}
                    label={label}
                    name={name}
                    value={value}
                    onInput={onInput}
                    {...(error && {error: true, helperText: error})}
                    {...other}
                />
            </div>
        </Grid>
    );
};

export default Input;