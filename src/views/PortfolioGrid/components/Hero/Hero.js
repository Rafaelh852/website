import React from 'react';
import Typed from 'react-typed';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Projects that are significant, informative and robust.
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
    </Box>
  );
};

export default Hero;
