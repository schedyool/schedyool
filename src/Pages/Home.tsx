// calebaren.github.io
import React from 'react';
import Page from './Page';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Controls from '../Components/Controls/Controls';

const Home = (): any => {
    return (
        <Page title="Welcome to Schedyool!" subtitle="A free school scheduling app for COVID-19." >
            <Typography paragraph>
                Thanks to the requirements of blended virtual and physical learning, principals have the
                daunting task of scheduling students while satisfying several constraints:
          </Typography>
            <Typography paragraph>
                1.  the number of students in each classroom cannot exceed its "socially-distanced" capacity;
          </Typography>
            <Typography paragraph>
                2.  sets of students such as siblings and members of learning pods who wish to attend
                school on the same days should be allowed to;
          </Typography>
            <Typography paragraph>
                3.  pairs of students who wish to attend school on different days, for whatever reason,
                should be allowed to;  and
          </Typography>
            <Typography paragraph>
                4.  sets of students such as those learning English as a new language (ENL) or needing
                integrated co-teaching (ICT) should be handled appropriately.
          </Typography>
            <Typography paragraph>
                Schedyool simplifies your job by doing the scheduling for you.  You provide information on
                the students, without giving any students' names, and, in most cases, Schedyool will find and e-mail
                you a schedule.
          </Typography>

            <Typography paragraph> Click a button below to get started.  </Typography>
            <Typography paragraph>(You can also find a Youtube instructional video <a href="https://www.youtube.com/watch?v=2W5YtwzT7kc" 
              target="_blank" rel="noopener noreferrer">here</a>.)  </Typography>
            

            <Link href="/instructions"> <Controls.Button text="Instructions" /> </Link>
            
            <Link href="/scheduler"> <Controls.Button text="Schedyool!" /> </Link>

            <Typography paragraph>
                Powered by AMPL (TM) algebraic modeling software and Gurobi (TM) optimization
                software, Schedyool is free school-scheduling software specifically for
                the scheduling of blended learning during Covid-19.  For
                help, e-mail help@schedyool.com.
            </Typography>

            <Typography paragraph variant="body2">
                DISCLAIMER:  By using Schedyool, you acknowledge that Schedyool comes with no express or
                implied warranty.  There is no warranty of any kind concerning the fitness of the Schedyool results
                for any use.  There is no guaranty that Schedyool will function as intended.  In particular,
                in some cases Schedyool may produce no schedule at all.  You acknowledge
                that any schedule produced by Schedyool will be manually reviewed by the school's
                principal for appropriateness before being implemented.
            </Typography>

        </Page>
    );
};

export default Home;
