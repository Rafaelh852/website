import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '@/layouts/Main';
import Container from '@/components/Container';
import NoSsr from '@mui/material/NoSsr';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typed from 'react-typed';

import {
  GetStarted,
  Features,
  QuickStart,
  Services,
  Benefits,
  About,
  Hero,
  Skills,
  Projects,
  Contact
} from './components';
import { Divider } from '@mui/material';

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

const HireCTA = ()=>(<Box  
  sx={{
    backgroundImage: `linear-gradient(to bottom, ${alpha(
      theme.palette.background.paper,
      0,
    )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
    backgroundRepeat: 'repeat-x',
    position: 'relative',
  }}
>
  <Box  paddingY="40px" >
    <Typography
      variant="h3"
      color="text.primary"
      align={'center'}
      gutterBottom
      sx={{
        fontWeight: 700,
      }}
    >
      Hire Rafael Today
    </Typography>
    <Typography
      variant="h6"
      component="p"
      color="text.secondary"
      sx={{ fontWeight: 400 }}
      align={'center'}
    >
       <Typed
              strings={['Effective, Creative, Resourceful.', 'Effective, Creative, Resourceful.']}
              typeSpeed={40}
              loop={true}
            />
    </Typography>
    
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }} 
      justifyContent={'center'}
      marginTop={4}
    >
      
      <Box
        marginTop={{ xs: 2, sm: 0 }}
        marginLeft={{ sm: 2 }}
        width={{ xs: '100%', md: 'auto' }}
      >
       <Box display="flex" marginTop={{ xs: 2, md: 0 }} justifyContent={'center'}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            width={20}
            height={20}
            
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </Box>
        }
        href={'@/assets/docs/Rafael Hernandez Resume.docx'}
        download
      >
        Download Resume
      </Button>
    </Box>
      </Box>
    </Box>
  </Box>
</Box>);

const Projectblurb = ()=>(<Box paddingBottom={"10px"}>
  <Box marginBottom={4}>
    <Typography
      variant="h6"
      component="p"
      color="text.secondary"
      align={'center'}
      gutterBottom
      sx={{ fontWeight: 400 }}
    >
      Featured Projects: significant, informative and robust.
    </Typography>
    <Typography
      variant="h3"
      color="text.primary"
      align={'center'}
      sx={{
        fontWeight: 700,
      }}
    >
      Built with{' '}
      <Typed
        strings={[
          'modern tools.',
          'problem solving in mind.',
          'a robust architecture.',
        ]}
        typeSpeed={100}
        loop={true}
        backSpeed={50}
        backDelay={1500}
      />
    </Typography>
  </Box>
</Box>);


  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'} >
        
        <Hero />
          
          <Container >
            <About />
          </Container>
       
          <Container>
            <Skills/>
          </Container>

        <Divider/>

        <Container  >
          <Projectblurb/>
          <Projects/>
        </Container>

        
       
          <HireCTA/>
       
        
        
        
        <Container>
          <Contact />
        </Container>
        
        
      </Main>
      </Box>
  );
};


/* this is the one live rn before changes on 8/3
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
