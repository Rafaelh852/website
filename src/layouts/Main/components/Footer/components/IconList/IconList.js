import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';


import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const IconList = ()=> {

    const theme = useTheme();
    const { mode } = theme.palette;
    return (<Grid container xs = {2} paddingY = "15px">
        <Grid item margin = "0 10px">
            <Link
                underline="none"
                component="a"
                href="https://twitter.com/rafaelh852"
                color="text.primary"
                variant={'subtitle2'}
                fontSize="18px"
            >
                <TwitterIcon/>
            </Link>
        </Grid>
        <Grid item margin = "0 10px 0 0">
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
        </Grid>
        
      </Grid>)
};


export default IconList;