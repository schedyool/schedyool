import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import StartIcon from './HtmlTooltip';

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
        helpTitle, 
        helpText,
        icon,
        ...other
    } = props;
    return (
        <Grid item xs={breakpoint || 6}>
            <TextField
                InputProps={{
                    startAdornment: (
                        <StartIcon 
                            helpText={helpText} 
                            helpTitle={helpTitle} 
                            icon={icon} 
                        />
                    ),
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
        </Grid>
    );
};

export default Input;