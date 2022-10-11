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
        marginTop={-13}
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
      Data Scientist
      </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Applying Statistics and problem-solving techniques to create informed, data-driven decisions. 
        </Typography>
        <p></p>
        <Typography variant="h6" component="p" color="text.secondary">
        Strengths in Causal Inference, Machine Learning, Text Analysis, Sentiment Analysis, and NLP 
        </Typography>
        
        <Box  display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
              >
          <Button
             component={'a'}
             variant="contained"
             color="info"
             size="medium"
             fullWidth={isMd ? false : true}
             href={'/Portfolio'}
          >
            View Projects
          </Button>
           <Box paddingX={2}></Box>
           <Button
           
            variant="contained"
            color="text"
            size="medium"
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
            href={'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/Rafael Hernandez Resume.docx'}
            download
          >
            Download Resume
        </Button>
        </Box>
       
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