import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from '@/components/Container';

const images = [
 
  {
    group: [
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/prelim1.png',
        coverDark:
        'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/prelim1.png',
      },
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/cali.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/cali.png',
      },
    ],
  }, {
    group: [
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/total.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/total.png',
      },
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/mod2.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/mod2.png',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/db1.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/db1.png',
      },
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/mentalhealth1.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/mentalhealth1.png',
      },
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/proj2.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/proj2.png',
      },
      {
        cover:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/projN.png',
        coverDark:
          'https://portfolio-static-storage.us-southeast-1.linodeobjects.com/projN.png',
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
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
    
    height={'100vh'}
    overflow="show"
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Turn your data
              <br />
              into{' '}
              <Typography
                color={"#0288d1"}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                <Typed
                  strings={['decisions.', 'insights.', 'products.']}
                  typeSpeed={45}
                  loop={true}
                  showCursor={false}
              
                />
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              make your data work for you while
              saving you time and money.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="info"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/Portfolio'}
              >
                View work
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  
                  variant="contained"
                  color="text"
                  size="large"
                  fullWidth={isMd ? false : true}
                  href={'/About'}
                  //onClick={() => scrollTo('about')}
                >
                  About me
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};


/*
<Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        
      </Box>

*/
export default Hero;
