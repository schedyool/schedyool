// calebaren.github.io
import React from 'react';
import { Grid, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const FormSubmitPage = (props: any) => {
    const { handleSubmit, prevStep, values } = props;
    const {
        fullName, email, numBlendedLearning, numDays, numRooms, packedSpecialSets,
        numSetsSameDay, numPairsDiffDay, numSpecialSets, specialSets,
        mainFile, diffFile, roomFile, sameFile,
    } = values;

    const myPrevious = (e: any) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom={true}>
                Confirm before submission
            </Typography>
            <Divider variant="fullWidth" />
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
                        primary="Number of daily schedules"
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
                        primary="Number of special groups of students"
                        secondary={numSpecialSets}
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Fraction of special groups in each classroom"
                        secondary={specialSets.toString().length === 0 ? 'No special groups selected' : specialSets.toString() }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Special groups in classrooms by grade"
                        secondary={packedSpecialSets.toString().length === 0 ? 'No special groups selected' : packedSpecialSets.toString()}
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText 
                        primary="Main File"
                        secondary={mainFile[0] ? mainFile[0] : "No file..."}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Rooms File"
                        secondary={roomFile[0] ? roomFile[0] : "No file..."}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Same File"
                        secondary={sameFile[0] ? sameFile[0] : "No file..."}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText 
                        primary="Diff File"
                        secondary={diffFile[0] ? diffFile[0] : "No file..."}
                    />
                </ListItem>
            </List>
            <Divider />
            <Grid item sm={12}>
                <Controls.Button 
                    type="submit" 
                    value="Submit" 
                    text="Submit" 
                    onClick={(e: Event) => handleSubmit(e)}
                />
                <Controls.Button
                    text="Back"
                    color="default"
                    onClick={myPrevious}
                />
            </Grid>
        </div>
    )
}

export default FormSubmitPage;