import React from 'react';
import { Slider } from '@material-ui/core';

const SetsSliders = (props: any) => {
    const {defaultValue=null} = props;

    return (
        <Slider
            defaultValue={defaultValue || 1.0}
            step={0.05}
            min={0}
            max={1}
            marks={[
                {value: 0, label:'0%'}, 
                {value: 1, label:'100%'}
            ]}
            valueLabelDisplay="on"
            getAriaValueText={(x: any) => `${x*100}%`}
            valueLabelFormat={(x: any) => `${x*100}%`}
        />
    );
}

export default SetsSliders;
