import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '@/layouts/Main';
import Container from '@/components/Container';
import Contact from "@/components/Contact";

import {
    Hero,
    Promotions,
    Benefits,
    Services
} from "./components";


import Newsletter from '@/components/Newsletter';

const Home = ()=> {

    return (
        <Main colorInvert = "True" >
          <Hero />
          <Promotions />  
            <Benefits />
            <Services />
            <Container>
                <Contact />
            </Container>
        </Main>
    );
}
/*
hero 
    1. promos
    2. categories
benefits
    3 benefits // segway into consulting
services
    1. analysis
    2. skill stack
    3. ml services
        
     
about
    hi i'm personable this is my invitation to reach out 
contact
*/

export default Home;