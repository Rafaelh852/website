import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


//https://assets.maccarianagency.com/backgrounds/img1.jpg
/*

*/
const mock = [
    
    {
      image: '/assets/pics/project/projN.png',
      description: 'Finite Element Method 1-Dimensional solver',
      title: 'FEM 1D solver',
      github:"https://github.com/Rafaelh852/FEM1Dsolver",
      demo:"/nodemo",
    },
    {
      image: '/assets/pics/project/proj2.png',
      description: 'Finite Element Method 2-Dimensional solver',
      title: 'FEM 2D solver',
      github:"https://github.com/Rafaelh852/FEM2Dsolver",
      demo:"/nodemo",
    },
    
   
  ];
/*
{
    image: '/assets/pics/project/mentalhealth1.png',
    description: 'Machine Learning Project for kaggle mental health data set. -XGBoost -Sentiment analysis -text mining',
    title: 'Mental Health in the Workplace',
    github:"https://github.com/Rafaelh852/mentalHealth",
    demo:"/nodemo",
    },
{
      image: '/assets/pics/project/prelim1.png',
      description: 'Student performance in test evaluations',
      title: 'Student Performance',
      github:"https://github.com/Rafaelh852/studentPerf",
      demo:"/nodemo",
    },
    {
      image: '/assets/pics/project/db1.png',
      description: 'Flask API data framework used to craft project',
      title: 'Project Data',
      github:"https://github.com/Rafaelh852/ProjectDATA",
      demo:"/nodemo",
    },
*/

// grid items are divided by spacings of 12 so 6 is 2 items and 4 is 3 items while 12 is the whole thing

const Projects = ()=>{
    const theme = useTheme();
    return (
        <Box>
         
          <Grid container spacing={4}>
            {mock.map((item, i) => (
              <Grid item xs={12} sm={6} md={6} key={i}>
                <Box
                  component={'a'}
                  href={item.demo=="/nodemo"? item.github:item.demo}
                  target={item.demo=="/nodemo"? "_blank":"_self"}
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
                    display={'flex'}
                    flexDirection={'column'}
                  >
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      sx={{
                        height: { xs: 340, md: 400 },
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                      }}
                    />
                    <Box component={CardContent}>
                      <Typography variant={'h6'} fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant={'body2'} color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Box component={CardActions} justifyContent={'flex-start'}>
                      <a
                      href = {item.github}
                      target = "_blank"
                      >
                      <Button
                        size="large"
                        
                        endIcon={
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        }
                      >
                        Read more on GitHub
                      </Button>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );

} 

export default Projects;