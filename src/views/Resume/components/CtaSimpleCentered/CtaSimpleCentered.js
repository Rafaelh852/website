import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from '@/components/Container';
import Typed from 'react-typed';

const CtaSimpleCentered = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Consider Hiring Rafael Today
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
            href={'/assets/docs/Rafael Hernandez Resume.docx'}
            download
          >
            Download Resume
          </Button>
        </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
