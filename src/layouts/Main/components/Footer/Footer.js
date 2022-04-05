import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const mock = [
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" ,
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
   // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg"
    
]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
           <Box marginLeft = {0}>
          <Link
            underline="none"
            component="a"
            href="/"
            
          >
            <Typography
              fontFamily={"le-havre, sans-serif;"}
              fontSize="28px"
            >
              Rafael Hernandez.
            </Typography>
          </Link>
        </Box>

        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>

      {mock.map((item, i) => (
        <Box
          maxWidth={{ xs: 80, sm: 90 }}
          marginTop={{ xs: 1 }}
          marginLeft = {0}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >   
          <Box
            component="img"
            height={0.8}
            width={0.8}
            src={item}
            alt="..."
            sx={{
              filter: 'contrast(0)',
            }}
          />
        </Box>
      ))}
    </Box>



          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/in/rafael-hernandez852/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Contact
              </Link>
            </Box>
            
          </Box>
        </Box>
        
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; theFront. 2021, Maccarian. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
