import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


import Link from '@mui/material/Link';
//import ThemeModeToggler from '@/components/ThemeModeToggler';
import { Typography } from '@mui/material';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    socials: socialLinks
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
       <Box marginLeft = {0}>
          <Link
            underline="none"
            component="a"
            href="/"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            <Typography
              fontFamily={"le-havre, sans-serif;"}
              fontSize="28px"
            >
              Rafael Hernandez
            </Typography>
          </Link>
        </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>

        <Box marginLeft = {4}>
          <Link
            underline="none"
            component="a"
            href="/"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            Home
          </Link>
        </Box>

        <Box marginLeft = {4}>
          <Link
            underline="none"
            component="a"
            href="/Blog"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            Blog
          </Link>
        </Box>
        <Box marginLeft = {4}>
          <Link
            underline="none"
            component="a"
            href="/Portfolio"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            Portfolio
          </Link>
        </Box>
        <Box marginLeft = {4}>
          <Link
            underline="none"
            component="a"
            href="/Resume"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            Resume
          </Link>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Socials'}
            id={'portfolio-pages'}
            items={socialLinks}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"        
            href="/contact"
            size="large"
          >
            Contact
          </Button>
        </Box>
        
      </Box>
      
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

/*
<Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
*/

export default Topbar;
