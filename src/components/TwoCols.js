import React from "react";
import { useTheme } from '@mui/material/styles';
import {Grid,Container} from "@mui/material"


const TwoCols = ({col1, col2})=>{
    const theme = useTheme();
    
    return (
      <Container paddingX="40px" paddingY="20px">
        <Grid container paddingY = "15px" >
        <Grid
          item xs={12} md={6} marginY="20px" padding="15px" 
        >
          {col1}
        </Grid>
        <Grid
          item xs={12} md={6}  marginY="20px" padding="15px" 
        > 
        {col2}
        </Grid>
        </Grid>
      </Container>
        )
}


export default TwoCols;
