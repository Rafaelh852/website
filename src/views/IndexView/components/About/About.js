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
  
//
//marginTop={-13}
//
    return ( 
    
      <Box  
        id = "about"
        paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}
        alignItems={'center'}
        display={'flex'}
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
          </Typography>
        <p></p>
        <Typography variant="h6" component="p" color="text.secondary">
          While in grad school, Rafael founded a Data Science support group for students trying to break in to the industry.
        </Typography>

      </Box>
     
      
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        
      </Box>
        </Box>
      </Container>
      <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
    </Box>
       
    );
};
///paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}

/*


*/


export default About;