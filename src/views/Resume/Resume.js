import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import Main from '@/layouts/Main';

import Container from '@/components/Container';


import { CtaSimpleCentered } from './components';




const Resume = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  

  return (<Main>
      
     <Box
       minHeight={'100vh'}
       alignItems={'center'}
       bgcolor={'alternate.main'}
       display={'flex'}
       marginTop={-13}
       paddingTop={13}
     >
       <CtaSimpleCentered/>
     </Box>
    
  </Main>)

}

export default Resume;
