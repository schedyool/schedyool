// calebaren.github.io
import React from 'react';
import DataForm from './DataForm';
import Page from './Page';


const Scheduler = (): any => {
    return (
        <Page title="Schedyool" subtitle="Create schedules for your students!">
            <DataForm />
        </Page>
    );
};

export default Scheduler;