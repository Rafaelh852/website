import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@/components/Container';
import NoSsr from '@mui/material/NoSsr';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const About = () => {

  const theme = useTheme();
  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };
  

    return ( 
    
    <Box  
        id = "about"
        minHeight={'100vh'} 
        alignItems={'center'}
        display={'flex'}
        marginTop={-13}
        paddingTop={13}
        overflow="hidden"
    >
        <Container >
          <Box maxWidth={{ xs: 1, sm: '70%' }}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        About me
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
        a Data Scientist
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Rafael is a Data Scientist who's work has achieved funding for colleges and insight for companies. 
          While in grad school, Rafael founded a Data Science support group for students trying to break in to the industry.
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" marginTop={ 2}>
         Rafael occasionaly games and likes to bake on his spare time, his favorite food is burgers.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent ="flex-start" >
              <Button
                component={'a'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                onClick={() => scrollTo('about')}
                
              >
                Learn more
              </Button>
      </Box>
      
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        
      </Box>
        </Box>
      </Container>
    </Box>
       
    );
};
///paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}

export default About;