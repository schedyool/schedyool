// calebaren.github.io
import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import Controls from '../../Components/Controls/Controls';
import FormPages from '../FormPages';


const PageOne = (props: any) => {
    const { values, nextStep, handleInputChange } = props;
    return (
        <FormPages.FirstPage
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            values={values}
        >
            <Controls.Input
                helpText="Enter your name."
                icon={<AccountCircle />}
                type="text"
                label="Name"
                name="fullName"
                value={values.fullName}
                onInput={handleInputChange}
            // error={errors.fullName}
            />
            <Controls.Input
                helpText="Enter your email."
                icon={<EmailIcon />}
                required
                type="text"
                label="Email"
                name="email"
                value={values.email}
                onInput={handleInputChange}
            // error={errors.email}
            />
        </FormPages.FirstPage>
    );
};

export default PageOne;
