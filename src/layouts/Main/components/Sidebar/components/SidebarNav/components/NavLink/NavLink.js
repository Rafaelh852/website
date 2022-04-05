import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NavLink = ({ title, href }) => {
  const theme = useTheme();

  return (
    <Box >
     <Button
      
      size={'large'}
      component={'a'}
      href={href}
      fullWidth
      sx={{
        justifyContent: 'flex-start',
        color:theme.palette.text.primary,
        paddingX:0
      }}
     >
       {title}
     </Button>
    </Box>
  );
};

NavLink.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavLink;
