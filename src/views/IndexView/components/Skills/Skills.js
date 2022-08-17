import React from "react";

import Box from '@mui/material/Box';

const mock = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-plain-wordmark.svg",
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg",
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg",
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" ,
  //"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" ,
  
];

const Skills = ()=>{
return (
<Box display="flex" flexWrap="wrap" justifyContent={'center'} marginTop="-64px">

{mock.map((item, i) => (
  <Box
    maxWidth={{ xs: 80, sm: 90 }}
    marginTop={{ xs: 1 }}
    marginRight={{ xs: 3, sm: 6, md: 12 }}
    key={i}
  >   
    <Box
      component="img"
      height={1}
      width={1}
      src={item}
      alt="..."
      sx={{
        filter: 'contrast(0)',
      }}
    />
  </Box>
))}
</Box>
)
} 

export default Skills;