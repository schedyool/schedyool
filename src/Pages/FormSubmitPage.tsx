import React from 'react';
import { Grid, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormSubmitPage = (props: any) => {
    const { handleSubmit, prevStep, handleInputChange, values, children, ...other } = props;
    const {
        fullName, email, numBlendedLearning, numDays, numRooms, 
        numSetsSameDay, numPairsDiffDay, numSpecialSets, specialSets, files,
    } = values;

    const myPrevious = (e: any) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <Grid container>
            <Typography variant="h5">
                Confirm before submission
            </Typography>
            <List>
                <ListItem>
                    <ListItemText 
                        primary="Full Name:"
                        secondary={fullName.length ? fullName : "Missing!"}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Email:"
                        secondary={email.length ? email : "Missing!"}
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Number of students in Blended Learning"
                        secondary={numBlendedLearning}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Number of schedules"
                        secondary={numDays}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Number of classrooms"
                        secondary={numRooms}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Number of sets of students to schedule on the same day"
                        secondary={numSetsSameDay}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Number of pairs of students to schedule on different days"
                        secondary={numPairsDiffDay}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Number of special groupings of students"
                        secondary={numSpecialSets}
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Fraction of special group in each classroom"
                        secondary={specialSets.toString()}
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Files"
                    />
                    {files.map((file: File) => (<ListItemText secondary={file.name} />))}
                </ListItem>
            </List>
            <Divider />
            <Grid item sm={12}>
                <Controls.MyButton 
                    type="submit" 
                    value="Submit" 
                    text="Submit" 
                    onClick={(e: Event) => handleSubmit(e)}
                />
                <Controls.MyButton
                    text="Back"
                    color="default"
                    onClick={myPrevious}
                />
            </Grid>
        </Grid>
    )
}

export default FormSubmitPage;