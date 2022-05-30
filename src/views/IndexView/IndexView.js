import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '@/layouts/Main';
import Container from '@/components/Container';
import NoSsr from '@mui/material/NoSsr';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  GetStarted,
  Features,
  QuickStart,
  Services,
  Benefits,
  About,
  Hero,
} from './components';

const IndexView = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  
  const styles = (bgImage,opa=1) => ({
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
    opacity: opa,
  });

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'} >

        <Hero />

        <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="about"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            ' url',
          )}
        />
        <Container>
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
      <Box marginBottom={2} >
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
        While in graduate school, Rafael founded a Data Science support group for students trying to break into the industry.
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" marginTop={ 2}>
        He hopes to empower and inspire those around him.
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent ="flex-start">
              <Button
                component={'a'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                onClick={() => scrollTo('projectPreview')}
                href="/Portfolio"
              >
                See work
              </Button>
      </Box>
      
        </Box>
        </Container> 
        </Box>


      </Main>
      </Box>
  );
};

/*


<Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            '/assets/pics/blog/unemployment/total.png',
          )}
        />
        <Container>
        <Box>
            CONTENT
        </Box>
        </Container>
    </Box>
*/

/*
<Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            '/assets/pics/blog/unemployment/total.png',
          )}
        />
        <Container>
        <Box>
      <Typography
        variant="h1"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Nike
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        Just do it
      </Typography>
    </Box>
        </Container>
    </Box>


*/
export default IndexView;
