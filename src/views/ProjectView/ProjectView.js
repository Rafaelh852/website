import React , { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import Main from '@/layouts/Main';

import Container from '@/components/Container';



const ProjectView = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });

    var [page,setPage] = useState();
    useEffect(()=>{
        fetch("/project/" + "mentalHealth").then((res)=>res.json())
          .then((data)=>setPage(data));
      },[]);
    
    
    return(<Main>
        {page && <Container dangerouslySetInnerHTML={{ __html: page.content }}/>}
    </Main>)

}

export default ProjectView;