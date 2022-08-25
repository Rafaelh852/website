import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Main from '@/layouts/Main';
import Container from '@/components/Container';
import {
  Hero,
  SearchBox,
  FeaturedArticle,
  LastStories,
  CaseStudies,
  PopularArticles,
  Newsletter,
} from './components';


import ReactGA from "react-ga";
const TRACKING_ID = "UA-231703413-1";
ReactGA.initialize(TRACKING_ID);

const BlogReachView = () => {
 
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  const theme = useTheme();
  
  var n = 0;
  var k = 0;
  var [headers,setHeaders] = useState();

   // use for production
   const pa = "/index";

   //use for development
   //const pa = "/blog/index";

  useEffect(()=>{
    fetch(pa).then((res)=>res.json())
      .then((data)=>setHeaders(data.headers));
  },[]);

  
  const Featured =  ({item, LR})=>(<Box
    component={'a'}
    href={`/Blog/${item.path}`}
    display={'block'}
    width={1}
    height={1}
    sx={{
      textDecoration: 'none',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: `translateY(-${theme.spacing(1 / 2)})`,
      },
    }}
  >
    <Box
      component={Card}
      width={1}
      height={1}
      boxShadow={4}
      display={'flex'}
      justifyContent={{
        xs: 'center',
        md: LR ===  "R"? 'flex-end' : 'flex-start',
      }}
      sx={{
        minHeight: 300,
        backgroundImage: `url("${item.banner}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&:after': {
          position: 'absolute',
          content: '" "',
          width: '100%',
          height: '100%',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          background: '#161c2d',
          opacity: 0.6,
        },
      }}
    >
      <CardContent
        sx={{
          position: 'relative',
          width: { xs: 1, md: '50%' },
          height: 1,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 2,
        }}
      >
        <Box>
          <Typography
            variant={'h5'}
            gutterBottom
            sx={{ color: 'common.white' }}
          >
            {item.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ color: 'common.white', opacity: 0.8 }}
          >
            {item.preview}
          </Typography>
        </Box>
        <Box>
          <Divider
            sx={{
              marginY: 2,
              borderColor: 'common.white',
              opacity: 0.4,
            }}
          />
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box display={'flex'} alignItems={'center'}>
              <Avatar
                src={item.avatar}
                sx={{ marginRight: 1 }}
              />
              <Typography
                color={'text.secondary'}
                sx={{ color: 'common.white', opacity: 0.8 }}
              >
                {item.author}
              </Typography>
            </Box>
            <Typography
              color={'text.secondary'}
              sx={{ color: 'common.white', opacity: 0.8 }}
            >
              {item.date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  </Box>);
  
  const Muro = ({item,n}) =>(
    
          <Box 
            component={'a'}
            href={`/Blog/${item.path}`}
            display={'block'}
            width={1}
            height={1}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={4}
              display={'flex'}
              flexDirection={'column'}
              sx={{ backgroundImage: 'none' }}
            >
              <CardMedia
                image={item.banner}
                title={item.title}
                sx={{
                  height: { xs: 300, md: 360 },
                  position: 'relative',
                }}
              >
                <Box
                  component={'svg'}
                  viewBox="0 0 2880 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    color: theme.palette.background.paper,
                    transform: 'scale(2)',
                    height: 'auto',
                    width: 1,
                    transformOrigin: 'top center',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                    fill="currentColor"
                  />
                </Box>
              </CardMedia>
              <Box component={CardContent} position={'relative'}>
                <Typography variant={'h6'} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.preview}
                </Typography>
              </Box>
              <Box flexGrow={1} />
              <Box padding={2} display={'flex'} flexDirection={'column'}>
                <Box marginBottom={2}>
                  <Divider />
                </Box>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box display={'flex'} alignItems={'center'}>
                    <Avatar
                      src={item.avatar}
                      sx={{ marginRight: 1 }}
                    />
                    <Typography color={'text.secondary'}>
                      {item.author}
                    </Typography>
                  </Box>
                  <Typography color={'text.secondary'}>
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
   
        );
  
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        > 
          <SearchBox />
          
        </Container>
        <Container>
          <Grid container spacing={4}>
        {headers? headers.map((post)=>{
            n = n+1;
            k = k+1;
            if(n === 1){
              return <Grid item  key={k} md={12} sm = {12} xs = {12}>
                       <Featured item = {post["header"]} LR ={"L"}/>
                     </Grid>;
            }
            if (n === 2){
              return <Grid item  key={k} md={12} sm = {6} xs = {12} >
                        <Featured item = {post["header"]}LR = {"R"}/> 
                      </Grid>;
            }  
            if( n === 3){
              
              return <Grid item  key={k} md={6} sm = {6} xs = {12}>
                       <Muro item = {post["header"]} n = {n} />
                     </Grid>
              
            }
            if( n === 4){
              
              return <Grid item  key={k} md={6} sm = {12} xs = {12}>
                       <Muro item = {post["header"]} n = {n} />
                     </Grid>
              
            }
            if( n === 5){
              
              return <Grid item  key={k} md={4} sm = {12} xs = {12}>
                       <Muro item = {post["header"]} n = {n} />
                     </Grid>
              
            }
            if( n === 6){
              
              return <Grid item  key={k} md={4} sm = {6} xs = {12}>
                       <Muro item = {post["header"]} n = {n} />
                     </Grid>
              
            }
            if( (n===7) ){
              n = 0;
              return <Grid item  key={k} md={4} sm = {6} xs = {12}>
                       <Muro item = {post["header"]} n = {7} />
                     </Grid>
              
            }
            return;
          }):""}
          </Grid>
        </Container>
        
 
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
            zIndex: 2,
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
<Container paddingTop={'0 !important'}>
          <LastStories />
        </Container>
*/
export default BlogReachView;
