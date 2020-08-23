// calebaren.github.io
import React from 'react';
import Page from './Page';
import { Typography, Link } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const Home = (): any => {
    return (
        <Page title="🎓 Schedyool" subtitle="Covid School Scheduling App" >
          <Typography paragraph>
            Thanks to the requirements of blended virtual and physical learning, principals have the
            daunting task of scheduling students while satisfying several constraints:
          </Typography>
          <Typography paragraph>
            Please see the instructions.
          </Typography>
          <Link href="/instructions">
                <Controls.MyButton text="Get Started" color="default" />
            </Link>
        </Page>
    );
};

export default Home;