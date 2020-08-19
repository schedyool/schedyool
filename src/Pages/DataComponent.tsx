import React from 'react';
import DataForm from './DataForm';
// import PageHeader from '../Components/PageHeader';
// import { IconButton } from '@material-ui/core';
// import SchoolIcon from '../../node_modules/@material-ui/icons/School';


const DataComponent = (): any => {
    return (
        <>
            {/* <PageHeader 
                title="Form Design"
                subtitle="Form Design with Validation"
                icon={
                    <IconButton>
                        <SchoolIcon fontSize="large"/>
                    </IconButton>
                }
            /> */}
            <DataForm />
        </>
    );
};

export default DataComponent;