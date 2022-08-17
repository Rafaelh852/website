import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import {LinkList, IconList} from "./components";


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const mock = [
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" ,
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
   // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg"
    
]

  return (<Grid container  padding = "20px 0">
      <Grid item xs = {2} paddingY="15px">
        <Link
            underline="none"
            component="a"
            href="/"
            
          >
            <Typography
              fontFamily={"le-havre, sans-serif;"}
              fontSize="24px"
             
            >
              Rafael Hernandez 
            </Typography>
        </Link>
      </Grid>
      <Grid 
          item
          xs = {10}
          display={"flex"}
          flexDirection="row"
          padding = "0"
       >
        <LinkList />

        <IconList />
                
    </Grid>
  </Grid>
  );
};
/*
<Grid container spacing={2} max-height="100px" border = "2px solid red">
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
           <Box  paddingLeft={{sm:"20px",md:"40px"}} flexWrap="nowrap">
          <Link
            underline="none"
            component="a"
            href="/"
            
          >
            <Typography
              fontFamily={"le-havre, sans-serif;"}
              fontSize="24px"
             
            >
              Rafael Hernandez 
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
      <Grid 
          display="flex" 
          flexWrap={'wrap'}
          alignItems={'center'}
          border = "2px solid red"
          container
       >
        <LinkList />

        <IconList />
                
      </Grid>
    </Box>
        
      </Grid>
      
    </Grid>

*/



/*<Box marginTop={1} marginRight={10}>
              <Link
                underline="none"
                component="a"
                href="/contact"
                color="text.primary"
                variant={'subtitle2'}
                fontSize="18px"
              >
                Contact
              </Link>
            </Box>
            <Box marginTop={1} marginRight={10}>
              <Link
                underline="none"
                component="a"
                href="https://www.linkedin.com/in/rafael-hernandez852/"
                color="text.primary"
                variant={'subtitle2'}
                fontSize="18px"
              >
                <LinkedInIcon/>
              </Link>
            </Box>
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

*/
export default Footer;
