/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw'
import 'katex/dist/katex.min.css' ;

/*

const [post,setPost] = useState({});
  useEffect(()=>{
    fetch("/blog/index").then((res)=>res.json())
      .then((data)=> setPost(data.names[0]));
  },[]);



 
//gets current url and trucates after/Blog/ to set as path 
  const url = window.location.href;
  const path = url.slice(url.search("/Blog/")+"/Blog/".length,url.length);
  
  // makes api request to flask for body content
  const [body,setBody] = useState([]);
  useEffect(()=>{
    fetch("/blog/" + path).then((res)=>res.json())
      .then((data)=> setBody(data.content));
  },[]);



*/ 

const Content = ({body,header}) => {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const open = socialLink => {
    window.open(socialLink, "_blank")
  }
  const handleShare = e => {
    e.preventDefault()

    const ahref = window.location.href
    const encodedAhref = encodeURIComponent(ahref)
    var link

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
        open(link)
        break

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`
        open(link)
        break

      case "copy":
        navigator.clipboard.writeText(ahref)
        break

      default:
        break
    }
  }


  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
          <ReactMarkdown 
            
            children = {body} 
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex,rehypeRaw]}
          />
      </Box>

      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={header["avatar"][0]}
          />
          <Box>
            <Typography fontWeight={600}>{header["author"][0]}</Typography>
            <Typography color={'text.secondary'}>{header["date"][0]}</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Copy" id = "copy" onClick={handleShare}>
              <ContentCopyIcon />
            </IconButton>
            
            <IconButton aria-label="Facebook" id = "facebook" onClick={handleShare}>
              <FacebookIcon />
            </IconButton>
           
            <IconButton aria-label="Twitter" id = "twitter" onClick={handleShare}>
              <TwitterIcon />
            </IconButton> 
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
