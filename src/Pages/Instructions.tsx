// calebaren.github.io
import React from 'react';
import Page from './Page';
import { Typography, Link } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';

const Home = (): any => {
    return (
        <Page title="How to" subtitle="Instructions for using Schedyool" >
            <Typography paragraph>
                Directions
            </Typography>
            <Typography paragraph>
                Directions
            </Typography>
            <Link href="/scheduler">
                <Controls.MyButton text="Schedyool!" />
            </Link>
            <Link href="/">
                <Controls.MyButton text="Home" color="default" />
            </Link>
        </Page>
    );
};

export default Home;