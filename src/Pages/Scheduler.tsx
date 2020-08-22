import React from 'react';
import DataForm from './DataForm';
import Page from './Page';


const Scheduler = (): any => {
    return (
        <Page title="Schedule" subtitle="Create schedules for your students!">
            <DataForm />
        </Page>
    );

    // return (
    //     <Page 
    //         title="Upload Files" 
    //         subtitle="Upload .csv and .txt files to Schedyool to create your students' schedules."
    //     >
    //         <DataForm />
    //     </Page>
    // );
};

export default Scheduler;