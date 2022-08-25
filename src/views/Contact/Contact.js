import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from '@/layouts/Main';
import Container from '@/components/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Form } from './components';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  return( <Main>
    <Container
     minHeight={'100vh'}
     alignItems={'center'}
     display={'flex'}
     marginTop={-13}
     paddingTop={13}
     >
      
      <Grid container spacing={{ xs: 2, md: 2 }} flexDirection="column" alignItems={"center"}>
        <Grid item xs={4} >
          <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        Contact
      </Typography>
        </Grid>
       
        <Grid item container xs={12} md={7} alignItems={'center'} >
          
          <Form />
        </Grid>
      </Grid>
    </Container>

  </Main>)
};


export default Contact;