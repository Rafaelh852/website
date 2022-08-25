import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Main from '@/layouts/Main';
import Container from '@/components/Container';


import { About,Skills } from './components';

const AboutView = () => {
    return (<Main>
        <Container >
            <About />
            <Skills/>
        </Container>
        
    </Main>)
}
//<Divider/>
export default AboutView;