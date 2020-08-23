// calebaren.github.io
import React from 'react';
import { withStyles, Theme, Tooltip, Typography, InputAdornment } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const TempTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        // backgroundColor: theme.palette.background.paper,
        // color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 200,
        fontSize: theme.typography.pxToRem(13),
        // border: '1px solid #dadde9',
    }, 
}))(Tooltip);


const StartIcon = (props: any) => {
    const { helpText, icon } = props;

    return (
        <InputAdornment position="start">
            <TempTooltip 
                arrow 
                interactive
                placement="left-end"
                title={
                    <>
                        {/* <Typography color="inherit">
                            {helpTitle}
                        </Typography> */}
                        {helpText}
                    </>
                }
            >
                {icon || <HelpOutlineIcon />}
            </TempTooltip>
        </InputAdornment>
    );
};


export default StartIcon;