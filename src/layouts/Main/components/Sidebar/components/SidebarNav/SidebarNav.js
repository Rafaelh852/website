import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import NavLink from './components/NavLink';

import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    socials: socialLinks
  } = pages;

  const Links = [
    {"title":"Home", "ref":"/"},
    //{"title":"Consulting","ref":"/Service"},
    //{"title":"Projects", "ref":"/Portfolio"},
    {"title":"About","ref":"/About"},
    //{"title":"Socials", "ref":"https://linktr.ee/rafaelh852"},
  ];


  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
       
          <Box 
          display={'flex'}
          width={{ xs: 100, md: 120 }}
          >
          <Link
            underline="none"
            component="a"
            href="/"
            color={!(mode ==="light") ? 'common.white' : 'text.primary'}
          >
            
            <Typography
              fontFamily={"le-havre, sans-serif;"}
              fontSize="24px"
            >
              Rafael Hernandez
            </Typography>
          </Link>
        </Box>
        
      </Box>
      <Box paddingX={2} paddingY={2}>
        {Links.map((link)=>(
          <Box >
          <NavLink
            title={link.title}
            href={link.ref}
          /> 
          </Box>
        ))}
        

    
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="/contact"
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

/*

    <Box >
        <NavLink
            title="Blog"
            href="/Blog"
          /> 
        </Box>
        <Box >
        <NavLink
            title="Portfolio"
            href="/Portfolio"
          /> 
        </Box>
        <Box >
          <NavLink
            title="Resume"
            href="/Resume"
          />   
        </Box>
        <Box >
        <NavLink
            title="Socials"
            href="https://linktr.ee/rafaelh852"
          />
        </Box>

*/

/*


<NavItem
            title={'Socials'}
            id={'portfolio-pages'}
            items={socialLinks}
            
          />

*/
/*
<Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
*/


SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
