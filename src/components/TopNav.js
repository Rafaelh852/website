import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ThemeModeToggler from './ThemeModeToggler';

const TopNav = ({ colorInvert = false }) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};



/*

  <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/blocks"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Components
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/docs/introduction"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >
          Docs
        </Link>
      </Box>


*/
export default TopNav;
