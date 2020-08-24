// calebaren.github.io
import React from 'react';
import Page from './Page';
import { Typography, Link } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const Home = (): any => {
    return (
        <Page title="🎓 Welcome to Schedyool!" subtitle="A school scheduling app for COVID-19." >
            <Typography paragraph>
                Thanks to the requirements of blended virtual and physical learning, principals have the
                daunting task of scheduling students while satisfying several constraints:
          </Typography>
            <Typography paragraph>
                Please see the instructions below to get started.
          </Typography>
            <Link href="/instructions">
                <Controls.Button text="Get Started" color="default" />
            </Link>
        </Page>
    );
};

export default Home;