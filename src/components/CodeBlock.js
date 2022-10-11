import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';



const CodeBlock = ({text})=>{
  const theme = useTheme();
  
  return (<Box
    component={SyntaxHighlighter}
    language={'python'}
    style={vs2015}
    padding={`${theme.spacing(2)} !important`}
    borderRadius={2}
    margin={`${theme.spacing(0)} !important`}
    bgcolor={'#21325b !important'}
  >
    {text}
  </Box>)}


export default CodeBlock;