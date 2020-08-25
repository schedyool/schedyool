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
                Click the button below to get started!
          </Typography>
            <Link href="/instructions">
                <Controls.Button text="Get Started" />
            </Link>
            <Link href="/scheduler">
                <Controls.Button text="Schedyool!" color="default" />
            </Link>

            <Typography paragraph variant="body2">
                DISCLAIMER:  By using Schedyool, you acknowledge that Schedyool comes with no express or
                implied warranty.  There is no warranty of any kind concerning the fitness of the Schedyool results
                for any use.  There is no guaranty that Schedyool will function as intended.  In particular,
                in some cases Schedyool may produce no schedule at all.  You acknowledge that schedules produced
                that any schedule produced by Schedyool will be manually reviewed by the school's
                principal for appropriateness before being implemented.

          </Typography>
        </Page>
    );
};

export default Home;