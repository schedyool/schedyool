import React from 'react';
import { Slider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: theme.spacing(2),
    }
}));

const SetsSliders = (props: any) => {
    const {defaultValue=null, handleSliderChange} = props;
    const classes = useStyles();

    const displayValue = (x: any): string => {
        return `${x*1000 / 10}%`;
    }

    return (
        <div className={classes.root}>
            <Slider
                value={defaultValue || 1.0}
                step={0.01}
                min={0}
                max={1}
                marks={[
                    {value: 0, label:'0%'}, 
                    {value: 0.5, label:'50%'},
                    {value: 1, label:'100%'},
                ]}
                valueLabelDisplay="on"
                getAriaValueText={displayValue}
                valueLabelFormat={displayValue}
                onChange={handleSliderChange}
            />
        </div>
    );
}

export default SetsSliders;
