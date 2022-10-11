import React from "react";
import { useTheme } from '@mui/material/styles';
import { Typography, Box } from "@mui/material";


const Commentary = ({content,centering})=>{
    //centering is optional but if passed it will overide centering left to center or right
    return (
<Box marginBottom={4}>
  <Box marginBottom={2}>
    <Typography
      variant="h4"
      color="text.primary"
      align={centering? centering:'left'}
      gutterBottom
      sx={{
        fontWeight: 700,
      }}
    >
        {content.heading?content.heading:""}
    </Typography>
    
    {content.body.map((p) => {
    return (
    <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            marginY="20px"
            sx={{ fontWeight: 400 }}
            align={centering? centering:'left'}
        >
        {content.body?p:""}
    </Typography>
    )})}
    
    
  </Box>
</Box>

    )
};


export default Commentary;