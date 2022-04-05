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
          Thank You!
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          {"You Are "}
           <Typed
                  strings={['Awsome!', 'Great!',"The Best!"]}
                  typeSpeed={60}
                  loop={true}
                />
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
