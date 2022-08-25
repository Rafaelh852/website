import React , { useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@/components/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
        minHeight={"300px"}
        height = "auto"
        position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.bgc,
        backgroundSize: 'cover',
        color: "common.white"
    }}
        >
    <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container >
        <Typography
              variant="h2"
              component="p"
              color="alternate.primary"
              sx={{ fontWeight: 400 }}
            >
        Eye grabbing title
        </Typography>
        <Typography
              variant="h4"
              component="p"
              color="common.white"
              sx={{ fontWeight: 400 }}
              
            >
            cachy description
        </Typography>
    </Container>
    </Box>
    
      
    </Box>
    )

}

export default Hero;