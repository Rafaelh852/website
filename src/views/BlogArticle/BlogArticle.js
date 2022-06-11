import React , { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from '@/layouts/Main';
import Container from '@/components/Container';
import {
  Content,
  Hero,
  SimilarStories,
} from './components';




const BlogArticle = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  //gets current url and trucates after/Blog/ to set as path 
  const url = window.location.href;
  const path = url.slice(url.search("/Blog/")+"/Blog/".length,url.length);
  
  var [page,setPage] = useState();

  useEffect(()=>{
    fetch("/blog/" + path).then((res)=>res.json())
      .then((data)=>setPage(data));
  },[]);


  return (
    <Main colorInvert={true}>
      {page &&
      <Box>
        
        <Hero 
          title={page.header["title"]}

          author={page.header["author"]}

          day = {page.header["date"]}

          avatar = {page.header["avatar"][0]}

          banner = {page.header["banner"]}
         />

        <Container>
         
          <Content body ={page.content} header = {page.header}/>
            
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      }
      <Box bgcolor={'alternate.main'}>
        <Container>
          <SimilarStories />
        </Container>
       
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        
      </Box>
      
    </Main>
  );
};
/*
on LINE 78 in the empty container box

*/

export default BlogArticle;
