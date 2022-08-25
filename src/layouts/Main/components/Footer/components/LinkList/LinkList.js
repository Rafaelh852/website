import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';


const links = {
    "Contact":"/contact",
    //"Policy":"/policy",
    "Medium":"https://medium.com/@rafael.hernandez852",
    "Newsletter":"https://rafaelhernandez.substack.com/"

};


const LinkList = ()=>{
    const theme = useTheme();
    const { mode } = theme.palette;
    return (<Grid container
                 direction = "row-reverse"
                 justifyContent="flex-start"
                 
                 padding = "15px"
                 
                 >
        {Object.entries(links).map((x)=>(
            <Grid item  margin = "0 10px">
                <Link
                   underline="none"
                   component="a"
                   color="text.primary"
                   variant={'subtitle2'}
                   fontSize="18px"
                   href ={x[1]}
                   target="_blank"
                >
                    {x[0]}
                </Link>
            </Grid>

        ))}

    </Grid>)
}


export default LinkList;