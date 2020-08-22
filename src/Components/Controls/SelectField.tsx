import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
    //   minWidth: 120,
    },
  }),
);

const SelectField = (props: any) => {
    // const {name, label, value, onChange, option} = props;
    const { gradeIndex, setIndex, values, handlePackedSetsChange } = props;
    const classes = useStyles();
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel># classrooms</InputLabel>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={(e:any) => handlePackedSetsChange(e, setIndex, gradeIndex)}
                >
                <MenuItem value={100}>
                    <em>No constraint</em>
                </MenuItem>
                {
                    [...Array(21)].map((x: any, i: any) => {
                        console.log(i);
                        return (<MenuItem key={i} value={i}>{i}</MenuItem>);
                    })
                }
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </FormControl>
    );
};

export default SelectField;